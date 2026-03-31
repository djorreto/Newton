/* eslint-disable @next/next/no-img-element -- Logos estáticos en /public; mejor control del alpha que next/image */
import Link from "next/link";
import { cn } from "@/lib/cn";

export type PartnerLogoAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Blanco sobre negro sin alpha: fondo obsidian + mix-blend-lighten (poco habitual) */
  blendLighten?: boolean;
};

type PartnerLogoLinkProps = {
  href: string;
  logo: PartnerLogoAsset;
  className?: string;
  imgClassName?: string;
};

export function PartnerLogoLink({ href, logo, className, imgClassName }: PartnerLogoLinkProps) {
  const blend = logo.blendLighten === true;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md transition-transform hover:scale-[1.02] focus-visible:focus-ring",
        blend && "bg-obsidian px-2 py-1.5",
        className,
      )}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-auto w-auto object-contain object-left",
          blend && "mix-blend-lighten",
          imgClassName,
        )}
      />
    </Link>
  );
}
