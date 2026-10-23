import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "text";
type ButtonSize = "md" | "sm";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-red text-white shadow-sm hover:bg-ink",
  ghost: "border border-line bg-white/70 text-ink hover:border-gold hover:bg-stone",
  text: "text-red underline decoration-gold decoration-2 underline-offset-4 hover:text-ink",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  sm: "min-h-9 px-4 py-2 text-xs",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-normal transition-all duration-200 ease-church focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50";

interface CommonProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: React.ReactNode;
}

interface ButtonAsButton extends CommonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  readonly href?: undefined;
}

interface ButtonAsLink extends CommonProps, Omit<React.ComponentProps<typeof Link>, "className" | "children"> {
  readonly href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Shared button styles for consistent navigation and actions across the site. */
export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, "href" | "variant" | "size" | "className" | "children">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
