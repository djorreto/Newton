import { siteContent } from "@/content/siteContent";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/ui/Container";
import { PartnerLogoLink } from "@/components/ui/PartnerLogoLink";
import { FadeIn } from "@/components/motion/FadeIn";

export function BackingSection() {
  const s = siteContent.backing;
  return (
    <section
      className="border-t border-ice/[0.06] py-16 sm:py-20 lg:py-24"
      aria-labelledby="respaldo-heading"
    >
      <Container className="max-w-2xl">
        <FadeIn>
          <h2
            id="respaldo-heading"
            className="text-center font-heading text-xs font-semibold uppercase tracking-[0.26em] text-slate-mist/65"
          >
            {s.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-slate-mist/90 sm:text-[17px]">
            {s.paragraphs[0]}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div
            className="mt-10 flex flex-col items-center justify-center gap-10 opacity-[0.88] sm:mt-12 sm:flex-row sm:gap-16 sm:opacity-90"
            role="list"
          >
            <div role="listitem" className="transition-opacity duration-300 hover:opacity-100">
              <PartnerLogoLink
                href={siteConfig.xinergyUrl}
                logo={siteConfig.partnerLogos.xinergyBlanco}
                className="opacity-100"
                imgClassName="max-h-11 w-auto max-w-[min(92vw,280px)] sm:max-h-12"
              />
            </div>
            <div
              className="hidden h-8 w-px bg-ice/10 sm:block"
              aria-hidden
            />
            <div role="listitem" className="transition-opacity duration-300 hover:opacity-100">
              <PartnerLogoLink
                href={siteConfig.duxUrl}
                logo={siteConfig.partnerLogos.duxBlanco}
                className="opacity-100"
                imgClassName="max-h-9 w-auto max-w-[min(92vw,260px)] sm:max-h-10"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
