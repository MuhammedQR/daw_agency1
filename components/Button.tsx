"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "cta" | "subtle";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  loading?: boolean;
};

const base = "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base"
};

const variants: Record<Variant, string> = {
  primary: "bg-brand-primary text-white hover:opacity-90 shadow-soft",
  outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary/10",
  ghost: "bg-transparent text-brand-primary hover:bg-brand-primary/10",
  cta: "bg-brand-cta text-white hover:opacity-90 shadow-soft",
  subtle: "bg-[hsl(var(--surface))] text-[hsl(var(--content))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))/0.9]"
};

export function Button({ variant = "primary", size = "md", className, href, loading, children, ...props }: Props) {
  const cls = cn(base, sizes[size], variants[variant], className);
  const content = loading ? "Loading…" : children;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={props["aria-label"]}>
        {content}
      </Link>
    );
  }
  return <button className={cls} {...props}>{content}</button>;
}
