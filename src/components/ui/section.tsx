import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container - unified max-width + horizontal padding wrapper.
 * Use everywhere instead of repeating `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
 */
export const Container = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}
		{...props}
	/>
));
Container.displayName = "Container";

/**
 * Section - vertical rhythm wrapper with consistent section spacing tokens.
 * size: sm | md | lg controls the vertical padding scale.
 */
type SectionProps = React.HTMLAttributes<HTMLElement> & {
	as?: "section" | "div" | "article";
	size?: "sm" | "md" | "lg" | "hero";
};

const sectionSize: Record<NonNullable<SectionProps["size"]>, string> = {
	sm: "py-16 sm:py-20",
	md: "py-20 sm:py-28",
	lg: "py-24 sm:py-32",
	hero: "pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28",
};

export function Section({
	as: Tag = "section",
	size = "lg",
	className,
	children,
	...props
}: SectionProps) {
	return (
		<Tag className={cn("relative", sectionSize[size], className)} {...props}>
			{children}
		</Tag>
	);
}

/**
 * Eyebrow - section label with the leading rule used across the site.
 */
export function Eyebrow({
	children,
	className,
	tone = "muted",
}: {
	children: React.ReactNode;
	className?: string;
	tone?: "muted" | "inverted";
}) {
	return (
		<p
			className={cn(
				"inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em]",
				tone === "muted" ? "text-ink-muted" : "text-white/60",
				className,
			)}
		>
			<span
				className={cn(
					"h-px w-8",
					tone === "muted" ? "bg-foreground/30" : "bg-white/30",
				)}
			/>
			{children}
		</p>
	);
}
