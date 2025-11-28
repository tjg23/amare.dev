import type { SiteConfig } from '#types';

const siteConfig: SiteConfig = {
	website: 'https://example.com',
	title: 'Tyler Gorton',
	subtitle: 'Full Stack Developer',
	description: 'Personal portfolio and blog of Tyler Gorton, a full stack developer specializing in modern web technologies and thoughtful design.',
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
	hero: {
		title: "Hello, I'm Tyler",
		text:
			"I'm currently a senior in Software Engineering and Philosophy at Iowa State University. " +
			"I'm passionate about building web applications that are not only functional but also provide a great user experience. " +
			"Feel free to explore my projects and blog posts to learn more about my work and interests."
		,
		actions: [
			{
				text: 'Get in Touch',
				href: '/contact'
			}
		]
	},
	subscribe: {
		enabled: true,
		title: 'Subscribe to Dante Newsletter',
		text: 'One update per week. All the latest posts directly in your inbox.',
		form: {
			action: '#'
		}
	},
	postsPerPage: 8,
	projectsPerPage: 8
};

export default siteConfig;
