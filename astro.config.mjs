// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://marcidelux.github.io/step-sensei',
	base: '/step-sensei',
	integrations: [
		starlight({
			title: 'StepSensei',
			defaultLocale: 'hu',
			tableOfContents: false,
			locales: {
				en: { label: 'English' },
				hu: { label: 'Magyar', lang: 'hu' }
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Courses',
					translations: {
						'hu': 'Tanfolyamok',
					},
					items: [
						{
							label: 'Chess',
							translations: {
								'hu': 'Sakk',
							},
							slug: 'courses/chess'
						},
						{
							label: 'Informatics',
							translations: {
								'hu': 'Informatika',
							},
							slug: 'courses/informatics'
						},
						{
							label: 'Mathematics',
							translations: {
								'hu': 'Matematika',
							},
							slug: 'courses/matematics'
						},
					],
				},
				{
					label: 'Mentors',
					translations: {
						'hu': 'Mentorok',
					},
					items: [
						{
							label: 'Bugaj Mirka',
							translations: {
								'hu': 'Bugaj Mirka',
							},
							slug: 'mentors/mirka'
						},
						{
							label: 'Radnai Adam',
							translations: {
								'hu': 'Radnai Ádám',
							},
							slug: 'mentors/radnai-adam'
						},
					],
				}

			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
