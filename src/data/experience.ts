import { getCollection } from "astro:content";

export type ExposureFlag = "cv" | "resume";

export interface FlaggedValue<T> {
  flags: ExposureFlag[];
  value: T;
}

export interface ExperienceLanguage {
  name: string;
  proficiency: string;
}

export interface ExperiencePageContent {
  title: string;
  jobTitle: FlaggedValue<string>;
  introduction: FlaggedValue<string>;
  programmingTools: Array<FlaggedValue<string>>;
  languages: Array<FlaggedValue<ExperienceLanguage>>;
  closingNote: FlaggedValue<string>;
}

export const experiencePage: ExperiencePageContent = {
  title: "Experience",
  jobTitle: {
    flags: ["cv", "resume"],
    value: "Senior Software Engineer",
  },
  introduction: {
    flags: ["cv", "resume"],
    value:
      "Senior software engineer with 5+ years of experience designing backend-heavy systems for optimisation and scheduling software. My work focuses on domain modelling, internal DSL design, performance optimisation, and integration test architecture, with end-to-end ownership across architecture, implementation, rollout, and iteration.",
  },
  programmingTools: [
    { flags: ["cv", "resume"], value: "C#" },
    { flags: ["cv", "resume"], value: ".NET" },
    { flags: ["cv", "resume"], value: "TypeScript" },
    { flags: ["cv", "resume"], value: "React" },
    { flags: ["cv", "resume"], value: "WinForms" },
    { flags: ["cv", "resume"], value: "SQLite" },
    { flags: ["cv", "resume"], value: "Parquet" },
    { flags: ["cv", "resume"], value: "Power BI" },
    { flags: ["cv", "resume"], value: "Git" },
    { flags: ["cv", "resume"], value: "PowerShell" },
    { flags: ["cv", "resume"], value: "Jenkins" },
    { flags: ["cv", "resume"], value: "Azure DevOps" },
    { flags: ["cv", "resume"], value: "Bitbucket" },
    { flags: ["cv", "resume"], value: "Jira" },
  ],
  languages: [
    {
      flags: ["cv"],
      value: { name: "English", proficiency: "Native" },
    },
    {
      flags: ["cv"],
      value: { name: "Japanese", proficiency: "Limited Working Proficiency" },
    },
  ],
  closingNote: {
    flags: ["cv"],
    value:
      "I have chosen to omit references from this rendition of my curriculum vitae to ensure my references are not unduly contacted. I will gladly provide references to recruiters or potential employers upon request.",
  },
};

function includesFlag(flags: ExposureFlag[], exposure: ExposureFlag) {
  return flags.includes(exposure);
}

export function filterFlaggedValue<T>(item: FlaggedValue<T>, exposure: ExposureFlag) {
  return includesFlag(item.flags, exposure) ? item.value : null;
}

export function filterFlaggedValues<T>(items: Array<FlaggedValue<T>>, exposure: ExposureFlag) {
  return items.filter((item) => includesFlag(item.flags, exposure)).map((item) => item.value);
}

export function getExperiencePageContent(exposure: ExposureFlag) {
  return {
    title: exposure === "cv" ? "CV" : "Resume",
    jobTitle: filterFlaggedValue(experiencePage.jobTitle, exposure),
    introduction: filterFlaggedValue(experiencePage.introduction, exposure),
    programmingTools: filterFlaggedValues(experiencePage.programmingTools, exposure),
    languages: filterFlaggedValues(experiencePage.languages, exposure),
    closingNote: filterFlaggedValue(experiencePage.closingNote, exposure),
  };
}

export async function getExperienceSections(exposure: ExposureFlag) {
  const entries = await getCollection("cv");

  const sortEntries = (a: (typeof entries)[number], b: (typeof entries)[number]) =>
    b.id.localeCompare(a.id, undefined, { numeric: true });

  const includedEntries = entries
    .filter((entry) => entry.data.flags.includes(exposure))
    .map((entry) => ({
      ...entry,
      data: {
        ...entry.data,
        bullets: entry.data.bullets.filter((bullet) => bullet.flags.includes(exposure)),
      },
    }))
    .filter((entry) => entry.data.bullets.length > 0);

  return {
    education: includedEntries.filter((entry) => entry.id.startsWith("education/")).sort(sortEntries),
    work: includedEntries.filter((entry) => entry.id.startsWith("work/")).sort(sortEntries),
    volunteer: includedEntries.filter((entry) => entry.id.startsWith("volunteer/")).sort(sortEntries),
  };
}
