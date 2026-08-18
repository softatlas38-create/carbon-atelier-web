import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-all duration-500 [transition-timing-function:var(--ease-lux)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const styles = {
  solid:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-primary",
} as const;

type Variant = keyof typeof styles;

export function GoldLink({
  variant = "solid",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function GoldButton({
  variant = "solid",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}