import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/siteConfig";

/** Official asset: transparent PNG, unmodified — `/public/newton-logo.png` */
const LOGO_SRC = "/newton-logo.png";
const LOGO_WIDTH = 316;
const LOGO_HEIGHT = 302;

type LogoMarkProps = {
  className?: string;
  href?: string | null;
  size?: "sm" | "md" | "lg";
  /** LCP / hero */
  priority?: boolean;
};

const sizeClassName = {
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-[3.25rem]",
  lg: "h-16 w-auto sm:h-[4rem] lg:h-[4.5rem]",
};

export function LogoMark({
  className,
  href = "/",
  size = "md",
  priority = false,
}: LogoMarkProps) {
  const img = (
    <Image
      src={LOGO_SRC}
      alt="NEWTON Gravitational Innovations"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={cn("max-w-[min(100%,316px)] object-contain object-center", sizeClassName[size])}
      sizes="(max-width: 768px) 220px, 280px"
    />
  );

  const inner = <span className={cn("inline-flex shrink-0 items-center justify-center", className)}>{img}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex focus-visible:rounded-md focus-visible:focus-ring"
        aria-label={`${siteConfig.name} — inicio`}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
