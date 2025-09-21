// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://marcidelux.github.io',
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
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Modules',
					translations: {
						'hu': 'Modulok',
					},
					items: [
						{
							label: 'Chess',
							translations: {
								'hu': 'Sakk Angolul',
							},
							slug: 'modules/chess_english'
						},
						{
							label: 'LogicInfo',
							translations: {
								'hu': 'LogicInfo',
							},
							slug: 'modules/logic_info'
						},
						{
							label: 'Chess & Maths',
							translations: {
								'hu': 'Sakk & Matek',
							},
							slug: 'modules/chess_maths' 
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
