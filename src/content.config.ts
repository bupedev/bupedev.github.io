import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const exposureFlag = z.enum(["cv", "resume"]);

const cv = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/cv" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    flags: z.array(exposureFlag),
    bullets: z.array(
      z.object({
        flags: z.array(exposureFlag),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = { cv };
