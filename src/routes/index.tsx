import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: siteConfig.metadata.defaultTitle },
			{
				name: "description",
				content: siteConfig.metadata.indexDescription,
			},
			{
				property: "og:title",
				content: siteConfig.metadata.defaultOgTitle,
			},
			{
				property: "og:description",
				content: siteConfig.metadata.indexOgDescription,
			},
			{
				property: "og:url",
				content: `${siteConfig.url}/`,
			},
		],
		links: [
			{
				rel: "canonical",
				href: `${siteConfig.url}/`,
			},
		],
	}),
	component: Index,
});

function Index() {
	return (
		<>
			<Hero />
			<Services />
			<CTA />
		</>
	);
}
