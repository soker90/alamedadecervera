import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		image: z.string().optional(),
		pubDate: z.string().transform((str) => new Date(str))
	})
})

export const collections = { blog }
