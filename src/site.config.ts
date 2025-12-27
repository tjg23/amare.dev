import type { SiteConfig } from '#types';

const siteConfig: SiteConfig = {
	website: 'https://example.com',
	title: 'Tyler Gorton',
	subtitle: 'Full Stack Developer',
	description: 'Personal portfolio and blog of Tyler Gorton, a senior in Software Engineering and Philosophy at Iowa State University.',
	image: {
		src: '/dante-preview.jpg',
		alt: 'Dante - Astro.js and Tailwind CSS theme'
	},
	headerNavLinks: [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Projects',
			href: '/projects'
		},
		{
			text: 'Blog',
			href: '/blog'
		}
	],
	footerNavLinks: [
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Contact',
			href: '/contact'
		},
		{
			text: 'Terms',
			href: '/terms'
		}
	],
	socialLinks: [
		{
			text: 'Instagram',
			href: 'https://instagram.com/'
		},
		{
			text: 'X/Twitter',
			href: 'https://twitter.com/'
		}
	],
	subscribe: {
		enabled: true,
		title: 'Subscribe to my Newsletter',
		text: 'One update per week. All the latest posts directly in your inbox.',
		form: {
			action: '#'
		}
	},
	postsPerPage: 8,
	projectsPerPage: 8
};

export default siteConfig;
