import { defineCollection, z } from "astro:content";

const blogSchema = defineCollection({
    schema: z.object({
        title: z.string(),
        draft: z.boolean().default(false),
        description: z.string(),
        date: z.date().transform((str) => new Date(str)),
        tags: z.array(z.string().optional()),
    }),
});

export const collections = {
    blogs: blogSchema,
};
