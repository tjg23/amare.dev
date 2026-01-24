import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '#site.config.ts';
import { byDateDesc } from '#lib/utils.ts';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(byDateDesc);
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((item) => ({
			title: item.data.title,
			description: item.data.excerpt,
			link: `/blog/${item.id}/`,
			pubDate: item.data.publishDate.setUTCHours(0)
		}))
	});
}
