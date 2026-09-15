import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "text";
type ButtonSize = "md" | "sm";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-red text-paper hover:bg-red/90",
  ghost: "border border-line text-ink hover:bg-stone",
  text: "text-ink underline decoration-red decoration-2 underline-offset-4 hover:text-red",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors duration-200 ease-church focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none";

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

/** The one Button in the system. Renders a <Link> when given `href`, a native <button> otherwise. */
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
