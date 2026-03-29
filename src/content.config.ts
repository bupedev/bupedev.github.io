import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const exposureFlag = z.enum(["cv", "resume"]);
const bulletSchema: z.ZodType<{
  flags: Array<"cv" | "resume">;
  text: string;
  children?: Array<{
    flags: Array<"cv" | "resume">;
    text: string;
    children?: unknown[];
  }>;
}> = z.object({
  flags: z.array(exposureFlag),
  text: z.string(),
  children: z.array(z.lazy(() => bulletSchema)).optional(),
});

const cv = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/cv" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    flags: z.array(exposureFlag),
    bullets: z.array(bulletSchema),
  }),
});

export const collections = { cv };
