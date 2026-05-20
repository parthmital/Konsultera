import * as React from "react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Pill - premium rounded action button used across the site.
 * Renders <button>, internal <Link>, or external <a> based on props.
 */
const pill = cva(
	"group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				primary:
					"bg-foreground text-background shadow-elevated hover:shadow-glow hover:-translate-y-0.5",
				secondary:
					"border border-border bg-surface text-foreground hover:border-foreground/30 hover:bg-surface-elevated",
				inverted: "bg-background text-foreground hover:opacity-90",
			},
			size: {
				sm: "h-9 px-4 text-[13px]",
				md: "h-11 px-5",
				lg: "h-12 px-6",
			},
		},
		defaultVariants: { variant: "primary", size: "md" },
	},
);

type PillVariantProps = VariantProps<typeof pill>;

type PillCommon = PillVariantProps & {
	className?: string;
	children: React.ReactNode;
};

type PillButton = PillCommon &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		to?: undefined;
		href?: undefined;
	};
type PillLink = PillCommon & { to: string; href?: undefined };
type PillAnchor = PillCommon &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
		href: string;
		to?: undefined;
	};

export function Pill(props: PillButton | PillLink | PillAnchor) {
	const { variant, size, className, children, ...rest } =
		props as PillCommon & {
			to?: string;
			href?: string;
		};
	const cls = cn(pill({ variant, size }), className);

	if ("to" in props && props.to) {
		return (
			<Link to={props.to} className={cls}>
				{children}
			</Link>
		);
	}
	if ("href" in props && props.href) {
		const anchor = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
		return (
			<a href={props.href} className={cls} {...anchor}>
				{children}
			</a>
		);
	}
	return (
		<button
			className={cls}
			{...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
}
