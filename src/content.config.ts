import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writings = defineCollection({
  loader: glob({
    base: "./writings",
    pattern: "*.md",
    generateId: ({ entry }) => {
      const result = /^\d{4}-\d{2}-\d{2}-(?<slug>[\w-]+)\.md$/.exec(entry);

      return result?.groups?.slug || entry;
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().optional(),
      date: z.coerce.date(),
    }),
});

export const collections = { writings };
