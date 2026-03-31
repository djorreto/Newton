import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function PrinciplesSection() {
  const s = siteContent.principles;
  return (
    <section
      id={s.id}
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-36 lg:py-44"
      aria-labelledby="principios-heading"
    >
      {/* Capas de fondo: profundidad sin ruido */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(36,139,158,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/15 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[18%] left-[-8%] h-[320px] w-[320px] rounded-full bg-cyan-brand/[0.04] blur-[100px] sm:h-[400px] sm:w-[400px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-5%] top-[22%] h-[240px] w-[240px] rounded-full bg-midnight-deep/80 blur-3xl"
        aria-hidden
      />

      <Container className="relative max-w-[1100px]">
        <FadeIn>
          <SectionTitle
            id="principios-heading"
            eyebrow={s.eyebrow}
            title={s.title}
            subtitle={s.subtitle}
            align="center"
            spacious
            className="mx-auto max-w-2xl"
          />
        </FadeIn>

        <div className="mt-20 grid gap-6 sm:mt-24 sm:grid-cols-2 sm:gap-7 lg:mt-28 lg:gap-8">
          {s.items.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04}>
              <PrincipleCard item={item} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
