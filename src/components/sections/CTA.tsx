import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Pill } from "@/components/ui/cta";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
	return (
		<Section size="lg">
			<Container>
				<div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background shadow-elevated sm:p-14 lg:p-16">
					<div
						aria-hidden
						className="absolute inset-0 opacity-60"
						style={{
							background:
								"radial-gradient(ellipse 50% 70% at 80% 20%, oklch(0.85 0.16 82 / 0.4), transparent 60%), radial-gradient(ellipse 50% 60% at 10% 100%, oklch(0.50 0.01 20 / 0.3), transparent 60%)",
						}}
					/>
					<div className="relative grid items-end gap-10 lg:grid-cols-12">
						<div className="lg:col-span-8">
							<p className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
								{siteConfig.ctaSection.preTitle}
							</p>
							<h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
								{siteConfig.ctaSection.title}
							</h2>
						</div>
						<div className="lg:col-span-4 lg:justify-self-end">
							<Pill
								to={siteConfig.ctaSection.cta.to}
								variant="inverted"
								size="lg"
							>
								{siteConfig.ctaSection.cta.label}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</Pill>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
