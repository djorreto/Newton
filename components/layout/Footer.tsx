import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { PartnerLogoLink } from "@/components/ui/PartnerLogoLink";

const secondary = [
  { label: "Postula", href: "/postula" },
  { label: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-ice/10 bg-obsidian/90 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-5">
            <LogoMark href="/" size="md" />
            <p className="text-base leading-relaxed text-slate-mist">{siteContent.footer.line}</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex text-base font-semibold text-cyan-brand transition hover:text-ice focus-visible:rounded focus-visible:focus-ring"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="flex flex-wrap items-center gap-8 border-t border-ice/10 pt-8">
              <p className="sr-only">Xinergy y Dux</p>
              <PartnerLogoLink
                href={siteConfig.xinergyUrl}
                logo={siteConfig.partnerLogos.xinergyBlanco}
                imgClassName="max-h-9 w-auto max-w-[min(92vw,240px)] sm:max-h-10"
              />
              <PartnerLogoLink
                href={siteConfig.duxUrl}
                logo={siteConfig.partnerLogos.duxBlanco}
                imgClassName="max-h-8 w-auto max-w-[min(92vw,220px)] sm:max-h-9"
              />
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-base text-slate-mist" aria-label="Pie de página">
            {secondary.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ice">
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.linkedInUrl}
              className="transition hover:text-ice"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <p className="mt-12 border-t border-ice/10 pt-8 text-center text-sm text-slate-mist/85">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
