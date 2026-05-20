import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { siteConfig, type Service } from "@/lib/site-config";

export function Services() {
	return (
		<Section id="services" size="lg" aria-labelledby="services-title">
			<div
				aria-hidden
				className="absolute inset-x-0 top-0 -z-10 h-full"
				style={{
					background:
						"linear-gradient(180deg, transparent, oklch(0.97 0.003 40) 18%, oklch(0.97 0.003 40) 82%, transparent)",
				}}
			/>
			<Container>
				<header className="max-w-3xl">
					<Eyebrow>Our services</Eyebrow>
					<h2
						id="services-title"
						className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
					>
						Custom IT solutions{" "}
						<span className="text-gradient italic">for your business</span>
					</h2>
					<p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
						A full-stack technology practice spanning intelligence,
						infrastructure, and product engineering - delivered as your extended
						team.
					</p>
				</header>

				<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
					{siteConfig.services.map((s) => (
						<ServiceCard key={s.title} {...s} />
					))}
				</div>
			</Container>
		</Section>
	);
}

function ServiceCard({ icon: Icon, title, desc }: Service) {
	return (
		<article
			className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-surface p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-elevated"
			style={{ backgroundImage: "var(--gradient-card)" }}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background:
						"radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.85 0.16 82 / 0.1), transparent 70%)",
				}}
			/>
			<div className="relative flex h-full flex-col">
				<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated shadow-soft">
					<Icon className="h-5 w-5 text-foreground" aria-hidden />
				</div>
				<h3 className="mt-6 text-[17px] font-semibold tracking-tight text-foreground">
					{title}
				</h3>
				<p className="mt-3 text-sm leading-relaxed text-ink-muted">{desc}</p>

				<div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5 text-xs text-ink-muted">
					<span className="uppercase tracking-[0.14em]">Practice</span>
					<ArrowUpRight
						className="h-4 w-4 text-foreground/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						aria-hidden
					/>
				</div>
			</div>
		</article>
	);
}
