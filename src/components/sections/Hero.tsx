import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Pill } from "@/components/ui/cta";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
	return (
		<Section size="hero" className="overflow-hidden">
			<Backdrop />
			<Container>
				<div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-7">
						<div className="reveal inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 text-xs text-ink-muted shadow-soft backdrop-blur">
							<span className="relative flex h-1.5 w-1.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-gold)] opacity-60" />
								<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
							</span>
							<Sparkles className="h-3 w-3" aria-hidden />
							{siteConfig.hero.sparkles}
						</div>

						<h1 className="reveal reveal-delay-1 mt-7 font-display text-[2.75rem] leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
							{siteConfig.hero.title.plain1}
							<span className="text-gradient italic">
								{siteConfig.hero.title.gradient}
							</span>
						</h1>

						<p className="reveal reveal-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
							{siteConfig.hero.description}
						</p>

						<div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
							<Pill to={siteConfig.hero.ctaPrimary.to} variant="primary">
								{siteConfig.hero.ctaPrimary.label}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</Pill>
							<Pill
								href={siteConfig.hero.ctaSecondary.href}
								variant="secondary"
							>
								{siteConfig.hero.ctaSecondary.label}
							</Pill>
						</div>
					</div>

					<div className="lg:col-span-5">
						<HeroVisual />
					</div>
				</div>
			</Container>
		</Section>
	);
}

function Backdrop() {
	return (
		<>
			<div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
			<div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
			<div
				aria-hidden
				className="animate-float-slow absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
				style={{
					background:
						"radial-gradient(circle, oklch(0.85 0.16 82 / 0.25), transparent 70%)",
				}}
			/>
			<div
				aria-hidden
				className="animate-drift absolute right-10 top-20 -z-10 h-[320px] w-[320px] rounded-full opacity-30 blur-3xl"
				style={{
					background:
						"radial-gradient(circle, oklch(0.50 0.01 20 / 0.2), transparent 70%)",
				}}
			/>
		</>
	);
}

const nodes: Array<[number, number]> = [
	[200, 80],
	[320, 200],
	[200, 320],
	[80, 200],
	[285, 115],
	[285, 285],
	[115, 285],
	[115, 115],
];

function HeroVisual() {
	const chipLeft = siteConfig.hero.chips[0];
	const chipRight = siteConfig.hero.chips[1];
	const cluster = siteConfig.hero.cluster;

	return (
		<div className="reveal reveal-delay-2 relative mx-auto aspect-square w-full max-w-[520px]">
			<div className="absolute inset-0 rounded-3xl border border-border/60 bg-surface/70 shadow-elevated backdrop-blur-xl" />
			<div
				aria-hidden
				className="absolute inset-0 rounded-3xl opacity-70"
				style={{
					background:
						"conic-gradient(from 180deg at 50% 50%, oklch(0.95 0.03 82 / 0.4), oklch(0.92 0.01 20 / 0.3), oklch(0.93 0.03 82 / 0.4), oklch(0.95 0.03 82 / 0.4))",
					maskImage:
						"radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 80%)",
				}}
			/>
			<svg
				viewBox="0 0 400 400"
				className="absolute inset-0 h-full w-full"
				aria-hidden
			>
				<defs>
					<linearGradient id="orb" x1="0" x2="1">
						<stop
							offset="0%"
							stopColor="oklch(0.85 0.16 82)"
							stopOpacity="0.7"
						/>
						<stop
							offset="100%"
							stopColor="oklch(0.50 0.01 20)"
							stopOpacity="0.2"
						/>
					</linearGradient>
					<radialGradient id="core" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="oklch(0.98 0.02 82)" />
						<stop offset="60%" stopColor="oklch(0.85 0.16 82)" />
						<stop offset="100%" stopColor="oklch(0.45 0.01 20)" />
					</radialGradient>
				</defs>
				<g fill="none" stroke="url(#orb)" strokeWidth="1">
					<ellipse cx="200" cy="200" rx="160" ry="60" />
					<ellipse
						cx="200"
						cy="200"
						rx="160"
						ry="60"
						transform="rotate(60 200 200)"
					/>
					<ellipse
						cx="200"
						cy="200"
						rx="160"
						ry="60"
						transform="rotate(120 200 200)"
					/>
					<circle
						cx="200"
						cy="200"
						r="120"
						stroke="oklch(0.85 0.02 82 / 0.6)"
					/>
					<circle cx="200" cy="200" r="80" stroke="oklch(0.85 0.02 82 / 0.4)" />
				</g>
				{nodes.map(([x, y], i) => (
					<circle
						key={`${x}-${y}`}
						cx={x}
						cy={y}
						r={i % 2 ? 4 : 6}
						fill="oklch(0.85 0.16 82)"
						opacity={i % 2 ? 0.5 : 0.85}
					/>
				))}
				<circle cx="200" cy="200" r="34" fill="url(#core)" />
				<circle
					cx="200"
					cy="200"
					r="34"
					fill="none"
					stroke="oklch(1 0 0 / 0.3)"
				/>
			</svg>

			{chipLeft && (
				<Chip
					className="-left-3 -top-3 sm:-left-6"
					dot={chipLeft.dotColor}
					label={chipLeft.label}
					value={chipLeft.value}
				/>
			)}
			{chipRight && (
				<Chip
					className="-right-2 bottom-6 sm:-right-6"
					dot={chipRight.dotColor}
					label={chipRight.label}
					value={chipRight.value}
				/>
			)}
			<div className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-[11px] shadow-card backdrop-blur sm:-right-10">
				<div className="text-ink-muted">{cluster.label}</div>
				<div className="font-medium text-foreground">{cluster.value}</div>
			</div>
		</div>
	);
}

function Chip({
	className,
	dot,
	label,
	value,
}: {
	className?: string;
	dot: string;
	label: string;
	value: string;
}) {
	return (
		<div
			className={`absolute flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-[11px] shadow-card backdrop-blur ${className ?? ""}`}
		>
			<span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
			<span className="text-ink-muted">{label}</span>
			<span className="font-medium text-foreground">{value}</span>
		</div>
	);
}
