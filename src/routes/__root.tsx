import {
	Outlet,
	Link,
	createRootRoute,
	useRouter,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/lib/site-config";

function NotFoundComponent() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4">
			<div className="max-w-md text-center">
				<h1 className="text-7xl font-bold text-foreground">404</h1>
				<h2 className="mt-4 text-xl font-semibold text-foreground">
					Page not found
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="mt-6">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
					>
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
	console.error(error);
	const router = useRouter();

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4">
			<div className="max-w-md text-center">
				<h1 className="text-xl font-semibold tracking-tight text-foreground">
					This page didn't load
				</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					Something went wrong on our end. You can try refreshing or head back
					home.
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-2">
					<button
						onClick={() => {
							router.invalidate();
							reset();
						}}
						className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
					>
						Try again
					</button>
					<a
						href="/"
						className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
					>
						Go home
					</a>
				</div>
			</div>
		</div>
	);
}

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },
			{ title: siteConfig.metadata.defaultTitle },
			{
				name: "description",
				content: siteConfig.metadata.defaultDescription,
			},
			{ name: "author", content: siteConfig.metadata.author },
			{
				property: "og:site_name",
				content: siteConfig.name,
			},
			{
				property: "og:locale",
				content: "en_US",
			},
			{
				property: "og:title",
				content: siteConfig.metadata.defaultOgTitle,
			},
			{
				property: "og:description",
				content: siteConfig.metadata.defaultOgDescription,
			},
			{ property: "og:type", content: "website" },
			{
				property: "og:image",
				content: `${siteConfig.url}${siteConfig.metadata.ogImage}`,
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "630",
			},
			{
				name: "twitter:card",
				content: siteConfig.metadata.twitterCard,
			},
			{
				name: "twitter:title",
				content: siteConfig.metadata.defaultOgTitle,
			},
			{
				name: "twitter:description",
				content: siteConfig.metadata.defaultOgDescription,
			},
			{
				name: "twitter:image",
				content: `${siteConfig.url}${siteConfig.metadata.ogImage}`,
			},
		],
		links: [
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "apple-touch-icon", href: "/favicon.svg" },
			{ rel: "manifest", href: "/manifest.json" },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
	const validSocials = siteConfig.socials
		.map((s) => s.href)
		.filter((h) => h && h !== "#");

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: siteConfig.name,
		legalName: siteConfig.fullName,
		url: siteConfig.url,
		logo: `${siteConfig.url}/favicon.svg`,
		description: siteConfig.metadata.defaultDescription,
		address: {
			"@type": "PostalAddress",
			streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
			addressLocality: "Mumbai",
			addressRegion: "Maharashtra",
			postalCode: "400104",
			addressCountry: "IN",
		},
		contactPoint: {
			"@type": "ContactPoint",
			email: siteConfig.contact.email,
			contactType: "customer service",
		},
		...(validSocials.length > 0 ? { sameAs: validSocials } : {}),
	};

	return (
		<html lang="en">
			<head>
				<HeadContent />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function RootComponent() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
