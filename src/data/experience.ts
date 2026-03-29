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

export interface ExperienceSkillGroup {
  title: string;
  items: string[];
}

export interface ExperiencePageContent {
  title: string;
  jobTitle: FlaggedValue<string>;
  introduction: FlaggedValue<string>;
  skillGroups: Array<FlaggedValue<ExperienceSkillGroup>>;
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
  skillGroups: [
    {
      flags: ["cv", "resume"],
      value: {
        title: "Languages",
        items: ["C#", "TypeScript", "SQL", "PowerShell"],
      },
    },
    {
      flags: ["cv", "resume"],
      value: {
        title: "Platforms/Frameworks",
        items: [".NET", "React", "WinForms"],
      },
    },
    {
      flags: ["cv", "resume"],
      value: {
        title: "Data/Storage",
        items: ["SQLite", "Parquet"],
      },
    },
    {
      flags: ["cv", "resume"],
      value: {
        title: "DevOps/Tooling",
        items: ["Git", "Azure DevOps", "Bitbucket", "Jenkins", "Jira"],
      },
    },
    {
      flags: ["cv", "resume"],
      value: {
        title: "Testing/Architecture",
        items: ["integration testing", "domain modeling", "DSL design", "performance optimization"],
      },
    },
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
    skillGroups: filterFlaggedValues(experiencePage.skillGroups, exposure),
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
