// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://logicinfo.eu',
	base: '/',
	integrations: [
		starlight({
			title: 'LogicInfo',
			logo: {
				src: './src/assets/logo.png',
			},
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
							label: 'Mirka Bugaj',
							translations: {
								'hu': 'Bugaj Mirka',
							},
							slug: 'mentors/mirka'
						},
						{
							label: 'Adam Radnai',
							translations: {
								'hu': 'Radnai Ádám',
							},
							slug: 'mentors/radnai-adam'
						},
					],
				},
			{
				label: 'Contact',
				translations: {
					'hu': 'Kapcsolat',
				},
				slug:'contact'
			}
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
