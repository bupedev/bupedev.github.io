import http from "node:http";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { chromium } from "playwright";

const distDir = path.resolve("dist");
const basePath = normalizeBasePath(process.env.BASE_PATH || "/");
const requestedPort = Number(process.env.PDF_PORT || "0");
const execFileAsync = promisify(execFile);

const pdfTargets = [
  {
    route: "experience/cv/print/",
    filename: "ben-lewis-cv.pdf",
  },
  {
    route: "experience/resume/print/",
    filename: "ben-lewis-resume.pdf",
  },
];

await Promise.all(
  pdfTargets.flatMap(() => [
    fs.mkdir(path.join(distDir, "generated"), { recursive: true }),
    fs.mkdir(path.resolve("public", "generated"), { recursive: true }),
  ]),
);

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || "/", `http://127.0.0.1`);
    const filePath = await resolveFilePath(requestUrl.pathname);
    const buffer = await fs.readFile(filePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", getContentType(filePath));
    res.end(buffer);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
});

await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(requestedPort, "127.0.0.1", resolve);
});

try {
  const address = server.address();
  const activePort = typeof address === "object" && address ? address.port : requestedPort;
  const browserExecutablePath = getBrowserExecutablePath();

  if (browserExecutablePath?.toLowerCase().endsWith(".exe")) {
    for (const target of pdfTargets) {
      await generatePdfViaCli(
        browserExecutablePath,
        `http://127.0.0.1:${activePort}${basePath}${target.route}`,
        getDistOutputFile(target.filename),
      );
    }
  } else {
    const browser = await chromium.launch({
      executablePath: browserExecutablePath,
    });

    try {
      for (const target of pdfTargets) {
        const page = await browser.newPage();

        await page.goto(`http://127.0.0.1:${activePort}${basePath}${target.route}`, {
          waitUntil: "networkidle",
        });

        await page.pdf({
          path: getDistOutputFile(target.filename),
          format: "A4",
          printBackground: true,
          margin: {
            top: "12mm",
            right: "12mm",
            bottom: "12mm",
            left: "12mm",
          },
        });

        await page.close();
      }
    } finally {
      await browser.close();
    }
  }

  await Promise.all(
    pdfTargets.map((target) => fs.copyFile(getDistOutputFile(target.filename), getPublicOutputFile(target.filename))),
  );
} finally {
  await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

function getDistOutputFile(filename) {
  return path.join(distDir, "generated", filename);
}

function getPublicOutputFile(filename) {
  return path.resolve("public", "generated", filename);
}

function normalizeBasePath(value) {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

async function resolveFilePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath);
  const safePath = decodedPath.replace(/^\/+/, "");
  const absolutePath = path.resolve(distDir, safePath);

  if (!absolutePath.startsWith(distDir)) {
    throw new Error("Invalid path");
  }

  const stats = await fs.stat(absolutePath).catch(() => null);
  if (stats?.isFile()) {
    return absolutePath;
  }

  const htmlPath = `${absolutePath}.html`;
  const htmlStats = await fs.stat(htmlPath).catch(() => null);
  if (htmlStats?.isFile()) {
    return htmlPath;
  }

  const indexPath = path.join(absolutePath, "index.html");
  const indexStats = await fs.stat(indexPath).catch(() => null);
  if (indexStats?.isFile()) {
    return indexPath;
  }

  throw new Error("Missing file");
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    case ".woff2":
      return "font/woff2";
    case ".woff":
      return "font/woff";
    case ".ttf":
      return "font/ttf";
    default:
      return "application/octet-stream";
  }
}

function getBrowserExecutablePath() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
    "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "/mnt/c/Program Files/Microsoft/Edge/Application/msedge.exe",
    "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fsSync.existsSync(candidate)) {
      return candidate;
    }
  }

  return undefined;
}

async function generatePdfViaCli(browserExecutablePath, url, destinationPath) {
  const { stdout } = await execFileAsync("wslpath", ["-w", destinationPath]);
  const windowsDestinationPath = stdout.trim();

  await new Promise((resolve, reject) => {
    const child = spawn(
      browserExecutablePath,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=5000",
        "--no-pdf-header-footer",
        "--print-to-pdf-no-header",
        `--print-to-pdf=${windowsDestinationPath}`,
        url,
      ],
      {
        stdio: "ignore",
      },
    );

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Browser CLI PDF generation failed with exit code ${code}`));
    });
  });

  const stats = await fs.stat(destinationPath).catch(() => null);
  if (!stats?.isFile()) {
    throw new Error("PDF was not generated");
  }
}
