import { defineCollection, z } from "astro:content";

const cv = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    start_date: z.string(),
    end_date: z.string(),
  }),
});

export const collections = { cv };
