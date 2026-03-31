import { Check } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";

export function AudienceSection() {
  const s = siteContent.audience;
  return (
    <section
      id={s.id}
      className="scroll-mt-24 border-y border-ice/[0.05] bg-midnight/20 py-24 sm:py-32 lg:py-40"
      aria-labelledby="audiencia-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionTitle id="audiencia-heading" title={s.title} spacious />
            <p className="mt-8 text-base leading-relaxed text-slate-mist/95 sm:text-[17px]">{s.intro}</p>
            <p className="mt-6 text-base font-medium leading-relaxed text-ice/90 sm:text-[17px]">{s.closing}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <ul
              className="space-y-3.5 rounded-[16px] border border-ice/[0.07] bg-obsidian/40 p-6 sm:p-8"
              role="list"
            >
              {s.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-slate-mist/92 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-brand/18 text-cyan-brand/75">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
