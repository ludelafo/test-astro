import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

const title = "UPInfoIM";
const description =
	"Unité préparatoire d'informatique pour ingénierie des médias à la HEIG-VD.";
const protocol = "https";
const site = "ludelafo.github.io";
const base = "/test-astro";
const ogUrl = new URL(`${base}/og.webp?v=1`, `${protocol}://${site}`).href;
const ogImageAlt = `${title} - ${description}`;

// https://astro.build/config
export default defineConfig({
	site: `${protocol}://${site}`,
	base,
	integrations: [
		starlight({
			title,
			description,
			logo: {
				src: "./src/assets/logo.svg",
				replacesTitle: false,
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/ludelafo/test-astro",
				},
			],
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://cloud.umami.is/script.js",
						"data-website-id": "20c47a80-8802-463c-99a5-fe881bde77b9",
						"data-domains": site,
						defer: true,
					},
				},
				{
					tag: "meta",
					attrs: { property: "og:image", content: ogUrl },
				},
				{
					tag: "meta",
					attrs: { property: "og:image:alt", content: ogImageAlt },
				},
			],
			defaultLocale: "root",
			locales: {
				root: {
					label: "Français",
					lang: "fr",
				},
			},
			credits: true,
			editLink: {
				baseUrl: "https://github.com/ludelafo/test-astro/edit/main/",
			},
			lastUpdated: true,
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			plugins: [
				// https://starlight-links-validator.vercel.app/
				starlightLinksValidator(),
			],
			sidebar: [
				{
					label: "Introduction au cours",
					items: [{ autogenerate: { directory: "01-introduction-au-cours" } }],
				},
				{
					label: "Premiers pas à la HEIG-VD",
					collapsed: false,
					items: [
						{ autogenerate: { directory: "02-premiers-pas-a-la-heig-vd" } },
					],
				},
				{
					label: "Composants matériels d'un ordinateur",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "03-composants-materiels-dun-ordinateur",
							},
						},
					],
				},
				{
					label: "Composants logiciels d'un ordinateur",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "04-composants-logiciels-dun-ordinateur",
							},
						},
					],
				},
				{
					label: "Composants d'un système d'exploitation",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "05-composants-dun-systeme-dexploitation",
							},
						},
					],
				},
				{
					label: "Configurer son système d'exploitation",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "06-configurer-son-systeme-dexploitation",
							},
						},
					],
				},
				{
					label: "Installer et configurer ses applications",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "07-installer-et-configurer-ses-applications",
							},
						},
					],
				},
				{
					label: "Sauvegarder et restaurer ses données",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "08-sauvegarder-et-restaurer-ses-donnees",
							},
						},
					],
				},
				{
					label: "Prise de notes Markdown",
					collapsed: false,
					items: [
						{
							autogenerate: {
								directory: "09-prise-de-notes-markdown",
							},
						},
					],
				},
				{
					label: "Conclusion au cours",
					items: [{ autogenerate: { directory: "10-conclusion-au-cours" } }],
				},
				{
					label: "Autre",
					items: [{ autogenerate: { directory: "11-autre" } }],
				},
			],
		}),
	],
});
