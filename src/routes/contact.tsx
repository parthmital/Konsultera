import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, ArrowRight, Phone, type LucideIcon } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Pill } from "@/components/ui/cta";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: siteConfig.metadata.contactTitle },
			{
				name: "description",
				content: siteConfig.metadata.contactDescription,
			},
			{ property: "og:title", content: siteConfig.metadata.contactTitle },
			{
				property: "og:description",
				content: siteConfig.metadata.contactOgDescription,
			},
			{
				property: "og:url",
				content: `${siteConfig.url}/contact`,
			},
		],
		links: [
			{
				rel: "canonical",
				href: `${siteConfig.url}/contact`,
			},
		],
	}),
	component: ContactPage,
});

function ContactPage() {
	const [sent, setSent] = useState(false);

	return (
		<Section size="hero">
			<div
				aria-hidden
				className="bg-hero-glow absolute inset-x-0 top-0 -z-10 h-[600px] opacity-80"
			/>
			<Container>
				<div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<Eyebrow>Let's talk</Eyebrow>
						<h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
							Start a <span className="text-gradient italic">conversation</span>
						</h1>
						<p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
							Tell us about your roadmap. We'll get back within one business day
							with how {siteConfig.name} can extend your team.
						</p>

						<dl className="mt-10 space-y-5">
							<InfoRow
								icon={Mail}
								label="Email"
								value={siteConfig.contact.email}
								href={`mailto:${siteConfig.contact.email}`}
							/>
							<InfoRow
								icon={MapPin}
								label="Office"
								value={siteConfig.contact.address.full}
							/>
							<InfoRow
								icon={Phone}
								label="Hours"
								value={siteConfig.contact.hours}
							/>
						</dl>
					</div>

					<div className="lg:col-span-7">
						<div
							className="rounded-3xl border border-border/70 bg-surface p-7 shadow-elevated sm:p-10"
							style={{ backgroundImage: "var(--gradient-card)" }}
						>
							{sent ? (
								<SentState />
							) : (
								<ContactForm onSubmit={() => setSent(true)} />
							)}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
	return (
		<form
			className="space-y-5"
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit();
			}}
		>
			<div className="grid gap-5 sm:grid-cols-2">
				<Field
					label="Full name"
					name="name"
					placeholder="Jane Cooper"
					autoComplete="name"
					required
				/>
				<Field
					label="Work email"
					name="email"
					type="email"
					placeholder="jane@company.com"
					autoComplete="email"
					required
				/>
			</div>
			<Field
				label="Company"
				name="company"
				placeholder="Company name"
				autoComplete="organization"
			/>
			<div>
				<label
					htmlFor="message"
					className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink-muted"
				>
					How can we help?
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					required
					placeholder="Tell us about the problem you're solving."
					className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-ink-muted/60 focus:border-foreground/40 focus:ring-4 focus:ring-foreground/5"
				/>
			</div>
			<Pill type="submit" variant="primary" size="lg">
				Send message
				<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
			</Pill>
		</form>
	);
}

function SentState() {
	return (
		<div className="py-16 text-center">
			<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
				✓
			</div>
			<h2 className="mt-5 font-display text-2xl">Thanks, message received.</h2>
			<p className="mt-2 text-sm text-ink-muted">We'll be in touch shortly.</p>
		</div>
	);
}

type FieldProps = {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	autoComplete?: string;
	required?: boolean;
};

function Field({
	label,
	name,
	type = "text",
	placeholder,
	autoComplete,
	required,
}: FieldProps) {
	return (
		<div>
			<label
				htmlFor={name}
				className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink-muted"
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				required={required}
				className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-ink-muted/60 focus:border-foreground/40 focus:ring-4 focus:ring-foreground/5"
			/>
		</div>
	);
}

function InfoRow({
	icon: Icon,
	label,
	value,
	href,
}: {
	icon: LucideIcon;
	label: string;
	value: string;
	href?: string;
}) {
	const body = (
		<div className="flex gap-4">
			<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface shadow-soft">
				<Icon className="h-4 w-4 text-foreground" aria-hidden />
			</div>
			<div>
				<dt className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
					{label}
				</dt>
				<dd className="mt-1 text-sm leading-relaxed text-foreground">
					{value}
				</dd>
			</div>
		</div>
	);
	return href ? (
		<a href={href} className="block transition-opacity hover:opacity-80">
			{body}
		</a>
	) : (
		body
	);
}
