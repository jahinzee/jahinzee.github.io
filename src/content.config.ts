import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const garden = defineCollection({
    loader: glob({ "pattern": "**/*.mdx", base: "src/garden" }),
    schema: z.object({
        published: z.date(),
        updated: z.optional(z.date()),
        useKatex: z.optional(z.boolean())
    })
})

const darkroom = defineCollection({
    loader: glob({ "pattern": "*.yaml", base: "src/darkroom" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        source: image(),
        macrolocation: z.string(),
        location: z.optional(z.string()),
        published: z.date(),
        noncommercial: z.optional(z.boolean())
    })
})

export const collections = { garden, darkroom };