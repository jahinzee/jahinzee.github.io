import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const garden = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/garden" }),
  schema: z.object({
    published: z.date(),
    updated: z.optional(z.date()),
    useKatex: z.optional(z.boolean()),
    useToc: z.optional(z.boolean()),
  }),
});

const darkroom = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/darkroom" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      source: image(),
      macrolocation: z.string(),
      location: z.optional(z.string()),
      published: z.date(),
      noncommercial: z.optional(z.boolean()),
    }),
});

const irec_audio_item = defineCollection({
  loader: file("src/garden/data/irec-audio.yaml"),
  schema: z.object({
    type: z.enum(["album", "single"]),
    title: z.string(),
    artist: z.string(),
    year: z.union([z.string(), z.number()]),
    links: z.array(z.object({ id: z.string(), link: z.string() })),
    notes: z.optional(z.string()),
    "newly-added": z.optional(z.boolean()),
  }),
});

export const collections = { garden, darkroom, irec_audio_item };
