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
  size?: "sm" | "md" | "lg" | "xl";
  /** LCP / hero */
  priority?: boolean;
  /** Dentro de un título con texto visible: evita repetir el nombre en lectores de pantalla */
  decorative?: boolean;
};

const sizeClassName = {
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-[3.25rem]",
  lg: "h-16 w-auto sm:h-[4rem] lg:h-[4.5rem]",
  xl: "h-[6.5rem] w-auto max-w-[min(94vw,380px)] sm:h-[7.5rem] sm:max-w-none lg:h-[8.75rem] xl:h-[9.5rem]",
};

export function LogoMark({
  className,
  href = "/",
  size = "md",
  priority = false,
  decorative = false,
}: LogoMarkProps) {
  const img = (
    <Image
      src={LOGO_SRC}
      alt={decorative ? "" : "NEWTON Gravitational Innovations"}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      aria-hidden={decorative ? true : undefined}
      className={cn("max-w-[min(100%,316px)] object-contain object-center", sizeClassName[size])}
      sizes={
        size === "xl"
          ? "(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
          : "(max-width: 768px) 220px, 280px"
      }
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
