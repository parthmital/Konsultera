import {
	BrainCircuit,
	Code2,
	CloudCog,
	Radio,
	BarChart3,
	GitBranch,
	type LucideIcon,
} from "lucide-react";

export interface Service {
	icon: LucideIcon;
	title: string;
	desc: string;
}

export const siteConfig = {
	name: "Konsultera",
	fullName: "Konsultera Solutions Pvt. Ltd.",
	url: "https://konsultera.in",
	metadata: {
		defaultTitle: "Konsultera - Your Extended Technology Team",
		defaultDescription:
			"Konsultera Solutions: AI, cloud, DevOps, IoT, big data, and custom application development engineered for enterprise.",
		defaultOgTitle: "Konsultera - Your Extended Technology Team",
		defaultOgDescription:
			"Premium technology consulting for AI, cloud, and enterprise software.",
		author: "Konsultera Solutions Pvt. Ltd.",
		ogImage: "/Konsultera Large.svg",
		twitterCard: "summary_large_image",
		indexDescription:
			"Bringing life to your technology innovations. AI, cloud, DevOps, IoT, big data, and custom software engineered by Konsultera Solutions.",
		indexOgDescription:
			"Bringing life to your technology innovations - premium consulting for AI, cloud, and enterprise software.",
		contactTitle: "Contact - Konsultera Solutions",
		contactDescription:
			"Talk to Konsultera Solutions about AI, cloud, and enterprise software engineering. Mumbai, India.",
		contactOgDescription:
			"Start a conversation with your extended technology team.",
	},
	contact: {
		email: "reachus@konsultera.in",
		hours: "Mon - Fri · 10:00 to 19:00 IST",
		address: {
			line1: "4th Floor, M-Space Mahindra Eminente Commercial Premises",
			line2: "Sitaram Patkar Road, Goregaon West",
			line3: "Mumbai 400104, India",
			full: "4th Floor, M-Space Mahindra Eminente Commercial Premises, Sitaram Patkar Road, Goregaon West, Mumbai 400104, India",
		},
	},
	navLinks: [
		{ to: "/", label: "Home" },
		{ to: "/contact", label: "Contact" },
	] as const,
	footerLinks: [
		{ to: "/", hash: "services", label: "Technology Practice" },
		{ to: "/contact", label: "Contact" },
	] as const,
	socials: [
		{ label: "Facebook", href: "#" },
		{ label: "Twitter", href: "#" },
		{ label: "LinkedIn", href: "#" },
		{ label: "Pinterest", href: "#" },
	] as const,
	services: [
		{
			icon: BrainCircuit,
			title: "AI, ML Tech",
			desc: "Unlock smarter decisions with AI-driven insights, automation, and intelligent systems built for real-world impact.",
		},
		{
			icon: Code2,
			title: "Custom Application Development",
			desc: "Build web and mobile apps that are fast, scalable, and tailored to your needs using modern open-source tech.",
		},
		{
			icon: CloudCog,
			title: "DevOps & Cloud Services",
			desc: "Streamline development and operations with CI/CD, infrastructure automation, and cloud-native architectures.",
		},
		{
			icon: Radio,
			title: "IoT",
			desc: "Connect and control smart devices with secure, real-time IoT solutions for enterprise use.",
		},
		{
			icon: BarChart3,
			title: "Big Data Analytics",
			desc: "Transform data into strategy with end-to-end big data solutions, real-time processing, and interactive dashboards.",
		},
		{
			icon: GitBranch,
			title: "Open Source Consulting",
			desc: "Accelerate innovation with powerful, cost-effective solutions built entirely on robust open-source technologies.",
		},
	] as Service[],
	hero: {
		sparkles: "Engineering for what's next",
		title: {
			plain1: "Bringing life to your ",
			gradient: "Technology Innovations",
		},
		description:
			"Konsultera, your extended technology team - building AI, cloud, and enterprise software with the precision your roadmap demands.",
		ctaPrimary: {
			to: "/contact",
			label: "Contact Us",
		},
		ctaSecondary: {
			href: "#services",
			label: "Explore Services",
		},
		chips: [
			{
				label: "model.deploy()",
				value: "200ms",
				dotColor: "var(--accent-gold)",
			},
			{
				label: "CI/CD",
				value: "passing",
				dotColor: "oklch(0.7 0.18 145)",
			},
		],
		cluster: {
			label: "cluster",
			value: "eu-west · healthy",
		},
	},
	ctaSection: {
		preTitle: "Your extended technology team",
		title: "Let's build what's next, together.",
		cta: {
			to: "/contact",
			label: "Contact Us",
		},
	},
};
