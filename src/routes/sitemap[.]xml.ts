import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: async () => {
				const entries = [
					{ path: "/", changefreq: "weekly", priority: "1.0" },
					{ path: "/contact", changefreq: "monthly", priority: "0.7" },
				];
				const urls = entries.map(
					(e) =>
						`  <url>\n    <loc>${siteConfig.url}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
				);
				const xml = [
					`<?xml version="1.0" encoding="UTF-8"?>`,
					`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
					...urls,
					`</urlset>`,
				].join("\n");
				return new Response(xml, {
					headers: {
						"Content-Type": "application/xml",
						"Cache-Control": "public, max-age=3600",
					},
				});
			},
		},
	},
});
