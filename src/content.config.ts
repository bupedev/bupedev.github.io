import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const exposureFlag = z.enum(["cv", "resume"]);

type CvBullet = {
  flags: Array<"cv" | "resume">;
  text: string;
  children?: CvBullet[];
};

const bulletSchema: z.ZodType<CvBullet> = z.object({
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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    lastEditedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { cv, blog };
