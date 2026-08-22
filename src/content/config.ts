import { defineCollection, z } from 'astro:content';

const organizaciones = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		leaderName: z.string(),
		leaderRole: z.string(),
		icon: z.string(),
		accent: z.enum(['ember', 'cane', 'rio', 'campo']),
		order: z.number(),
		visible: z.boolean().default(true),
		gallery: z
			.array(z.object({ src: z.string(), alt: z.string() }))
			.optional(),
	}),
});

export const collections = { organizaciones };
