import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerItem, StaggerList } from "@/components/motion/StaggerList";

export function WhatWeOfferSection() {
  const s = siteContent.whatWeOffer;
  return (
    <section
      id={s.id}
      className="scroll-mt-24 border-y border-ice/[0.05] bg-midnight/25 py-24 sm:py-32 lg:py-40"
      aria-labelledby="que-aportamos-heading"
    >
      <Container>
        <FadeIn>
          <SectionTitle id="que-aportamos-heading" title={s.title} subtitle={s.subtitle} spacious />
        </FadeIn>
        <StaggerList stagger={0.06} className="mt-16 sm:mt-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {s.cards.map((c) => (
              <StaggerItem key={c.id}>
                <Card interactive className="h-full">
                  <h3 className="font-heading text-lg font-medium text-ice">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-mist/88">{c.body}</p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>
      </Container>
    </section>
  );
}
