import { Link } from "@tanstack/react-router";
import {
	Facebook,
	Twitter,
	Linkedin,
	Mail,
	MapPin,
	ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
			<path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.5 1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-.9 3.8-.3 1.1.6 2.1 1.7 2.1 2 0 3.5-2.1 3.5-5.2 0-2.7-2-4.6-4.8-4.6-3.3 0-5.2 2.5-5.2 5 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3 0 .2-.2.3-.4.2-1.5-.7-2.4-2.8-2.4-4.6 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.4-1.4 3.2.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
		</svg>
	);
}

const socialIcons: Record<
	string,
	React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
	Facebook: Facebook,
	Twitter: Twitter,
	LinkedIn: Linkedin,
	Pinterest: PinterestIcon,
};

const year = new Date().getFullYear();

export function Footer() {
	return (
		<footer className="relative mt-24 overflow-hidden bg-[oklch(0.14_0.01_20)] text-white/80 sm:mt-32">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-60"
				style={{
					background:
						"radial-gradient(ellipse 60% 50% at 20% 0%, oklch(0.85 0.16 82 / 0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 100%, oklch(0.50 0.01 20 / 0.15), transparent 60%)",
				}}
			/>
			<Container className="relative pb-10 pt-20">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-5">
						<Link
							to="/"
							className="inline-block"
							aria-label={`${siteConfig.name} - Home`}
						>
							<img
								src="/Konsultera Large.svg"
								alt={siteConfig.name}
								className="h-8 w-auto transition-opacity hover:opacity-90"
							/>
						</Link>
						<p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
							{siteConfig.metadata.defaultOgDescription}
						</p>
						<Link
							to="/contact"
							className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
						>
							Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
						</Link>
					</div>

					<div className="lg:col-span-3">
						<p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
							Quick Links
						</p>
						<ul className="mt-5 space-y-3 text-sm">
							{siteConfig.footerLinks.map((l) => (
								<li key={l.label}>
									<Link
										to={l.to}
										hash={"hash" in l ? l.hash : undefined}
										className="text-white/75 transition-colors hover:text-white"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-4">
						<p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
							{siteConfig.fullName}
						</p>
						<address className="mt-5 space-y-3 text-sm not-italic text-white/70">
							<div className="flex gap-3">
								<MapPin
									className="mt-0.5 h-4 w-4 shrink-0 text-white/50"
									aria-hidden
								/>
								<p className="leading-relaxed">
									{siteConfig.contact.address.line1},
									<br />
									{siteConfig.contact.address.line2},
									<br />
									{siteConfig.contact.address.line3}
								</p>
							</div>
							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="flex items-center gap-3 transition-colors hover:text-white"
							>
								<Mail className="h-4 w-4 text-white/50" aria-hidden />
								{siteConfig.contact.email}
							</a>
						</address>
					</div>
				</div>

				<div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
					<p className="text-xs text-white/50">
						© {year} {siteConfig.fullName}. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						<a
							href="#"
							className="text-xs text-white/55 transition-colors hover:text-white"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-xs text-white/55 transition-colors hover:text-white"
						>
							Terms of Service
						</a>
					</div>
					<ul className="flex items-center gap-2">
						{siteConfig.socials.map(({ label, href }) => {
							const Icon = socialIcons[label] || socialIcons.LinkedIn;
							return (
								<li key={label}>
									<a
										href={href}
										aria-label={label}
										className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
									>
										<Icon className="h-4 w-4" />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
		</footer>
	);
}
