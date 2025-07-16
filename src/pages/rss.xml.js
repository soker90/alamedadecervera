import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

export const GET = async (context) => {
	const blog = await getCollection('blog')

	return rss({
		title: 'Alameda de Cervera',
		description:
			'Web dedicada a la pedanía de Alameda de Cervera (Ciudad Real) y a sus habitantes. Aquí podrás encontrar información sobre el municipio, sus fiestas, su historia, sus tradiciones... ',
		site: context.site,
		items:
			blog?.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				link: `/actualidad/${post.slug}/`,
				pubDate: post.data.pubDate,
				content: sanitizeHtml(parser.render(post.body))
			})) || [],
		customData: `<language>es-es</language>`,
		stylesheet: '/rss/styles.xsl'
	})
}
