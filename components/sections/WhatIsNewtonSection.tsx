import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerItem, StaggerList } from "@/components/motion/StaggerList";

export function WhatIsNewtonSection() {
  const { whatIsNewton } = siteContent;
  return (
    <section
      id={whatIsNewton.id}
      className="scroll-mt-24 py-24 sm:py-32 lg:py-40"
      aria-labelledby="que-es-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="space-y-8">
            <FadeIn>
              <SectionTitle id="que-es-heading" title={whatIsNewton.title} spacious />
            </FadeIn>
            <div className="space-y-6 text-base leading-relaxed text-slate-mist/95 sm:text-[17px]">
              {whatIsNewton.paragraphs.map((p, i) => (
                <FadeIn key={i}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
          <StaggerList>
            <div className="grid gap-5">
              {whatIsNewton.miniCards.map((c) => (
                <StaggerItem key={c.id}>
                  <Card interactive className="h-full">
                    <h3 className="font-heading text-lg font-medium text-ice">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-mist/90">{c.body}</p>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerList>
        </div>
      </Container>
    </section>
  );
}
