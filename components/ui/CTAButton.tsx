import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[16px] px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:focus-ring disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-brand text-ice shadow-[0_0_0_1px_rgba(255,255,255,0.06)] shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-ice/12 bg-transparent text-ice hover:border-cyan-brand/25 hover:bg-cyan-brand/[0.06]",
  ghost: "text-cyan-brand/90 hover:text-ice underline-offset-4 hover:underline",
};

type CTAButtonProps = {
  variant?: Variant;
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function CTAButton({
  variant = "primary",
  href,
  external,
  className,
  children,
  ...rest
}: CTAButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}
