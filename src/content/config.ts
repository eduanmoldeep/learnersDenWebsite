import { defineCollection, z } from 'astro:content';

export const collections = {
	blog: defineCollection({
		type: 'data',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.date(),
			author: z.string(),
			image: z.string().optional(),
			draft: z.boolean().default(false),
			categories: z.array(z.string()),
		}),
	}),
	events: defineCollection({
		type: 'data',
		schema: z.object({
			title: z.string(),
			date: z.date(),
			location: z.string(),
			description: z.string(),
			image: z.string().optional(),
			tickets: z.string().optional(),
			draft: z.boolean().default(false),
		}),
	}),
};
