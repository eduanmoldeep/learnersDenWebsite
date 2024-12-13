import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		author: z.string(),
		image: z.string().optional(),
		draft: z.boolean().default(false),
		categories: z.array(z.string()),
	}),
});

export const collections = { blog };