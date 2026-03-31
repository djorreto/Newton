import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalCTASection() {
  const s = siteContent.finalCta;
  return (
    <section
      id={s.id}
      className="scroll-mt-24 py-24 sm:py-32 lg:py-40"
      aria-labelledby="cta-final-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[22px] border border-ice/[0.08] bg-gradient-to-br from-midnight/80 to-obsidian px-6 py-14 shadow-card sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-brand/[0.06] blur-[100px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl text-center">
            <FadeIn>
              <h2
                id="cta-final-heading"
                className="font-heading text-2xl font-medium tracking-tight text-ice sm:text-3xl lg:text-[2rem] lg:leading-snug"
              >
                {s.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mt-6 text-base leading-relaxed text-slate-mist/90 sm:text-[17px]">{s.body}</p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="mt-11 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <CTAButton href="/postula" variant="primary" className="min-h-[52px] w-full min-w-0 sm:w-auto sm:min-w-[220px]">
                  {s.primaryCta}
                </CTAButton>
                <CTAButton href="/contacto" variant="secondary" className="min-h-[52px] w-full min-w-0 sm:w-auto sm:min-w-[200px]">
                  {s.secondaryCta}
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
