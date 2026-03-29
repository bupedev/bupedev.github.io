import { getCollection } from "astro:content";

export const cvPage = {
  title: "CV",
  jobTitle: "Senior Software Engineer",
  introduction:
    "Senior software engineer with 5+ years of experience designing backend-heavy systems for optimisation and scheduling software. My work focuses on domain modelling, internal DSL design, performance optimisation, and integration test architecture, with end-to-end ownership across architecture, implementation, rollout, and iteration.",
  programmingTools: [
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "WinForms",
    "SQLite",
    "Parquet",
    "Power BI",
    "Git",
    "PowerShell",
    "Jenkins",
    "Azure DevOps",
    "Bitbucket",
    "Jira",
  ],
} as const;

export async function getCvSections() {
  const entries = await getCollection("cv");

  const sortEntries = (a: (typeof entries)[number], b: (typeof entries)[number]) =>
    b.id.localeCompare(a.id, undefined, { numeric: true });

  return {
    education: entries.filter((entry) => entry.id.startsWith("education/")).sort(sortEntries),
    work: entries.filter((entry) => entry.id.startsWith("work/")).sort(sortEntries),
    volunteer: entries.filter((entry) => entry.id.startsWith("volunteer/")).sort(sortEntries),
  };
}
