import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/section";
import { Pill } from "@/components/ui/cta";
import { siteConfig } from "@/lib/site-config";

function Brand() {
	return (
		<Link
			to="/"
			className="group flex items-center"
			aria-label={`${siteConfig.name} - Home`}
		>
			<img
				src="/Konsultera Large.svg"
				alt={siteConfig.name}
				className="h-7 w-auto transition-opacity group-hover:opacity-90"
			/>
		</Link>
	);
}

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-500",
				scrolled ? "py-3" : "py-5",
			)}
		>
			<Container>
				<nav
					className={cn(
						"flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
						scrolled
							? "h-14 glass border border-border/60 shadow-soft"
							: "h-16 border border-transparent bg-transparent",
					)}
					aria-label="Primary"
				>
					<Brand />

					<div className="hidden items-center gap-1 md:flex">
						{siteConfig.navLinks.map((l) => (
							<Link
								key={l.to}
								to={l.to}
								className="rounded-md px-3 py-2 text-sm text-ink-muted transition-colors hover:text-foreground"
								activeProps={{ className: "text-foreground" }}
								activeOptions={{ exact: true }}
							>
								{l.label}
							</Link>
						))}
					</div>

					<div className="flex items-center gap-2">
						<Pill to="/contact" size="sm" className="hidden sm:inline-flex">
							Let's Talk
							<ArrowUpRight className="h-3.5 w-3.5" />
						</Pill>
						<button
							type="button"
							className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
							onClick={() => setOpen((v) => !v)}
							aria-label={open ? "Close menu" : "Open menu"}
							aria-expanded={open}
						>
							{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</nav>

				{open && (
					<div className="glass animate-in mt-2 rounded-2xl border border-border/60 p-2 shadow-soft md:hidden">
						{siteConfig.navLinks.map((l) => (
							<Link
								key={l.to}
								to={l.to}
								onClick={() => setOpen(false)}
								className="block rounded-lg px-4 py-3 text-sm text-foreground hover:bg-muted"
							>
								{l.label}
							</Link>
						))}
						<Link
							to="/contact"
							onClick={() => setOpen(false)}
							className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background"
						>
							Let's Talk <ArrowUpRight className="h-4 w-4" />
						</Link>
					</div>
				)}
			</Container>
		</header>
	);
}
