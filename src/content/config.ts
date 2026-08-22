import { defineCollection, z } from 'astro:content';

const organizaciones = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		leaderName: z.string(),
		leaderRole: z.string(),
		icon: z.string(),
		accent: z.enum(['forest', 'earth', 'sky']),
		order: z.number(),
	}),
});

export const collections = { organizaciones };
