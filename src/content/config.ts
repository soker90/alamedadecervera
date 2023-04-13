import {z, defineCollection} from 'astro:content';

const placesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		image: z.string(),
		map: z.string().url().optional(),
		web: z.string().url().optional(),

	})
});

export const collections = {
	places: placesCollection,
};
