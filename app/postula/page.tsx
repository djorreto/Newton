import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/content/siteConfig";
import { siteContent } from "@/content/siteContent";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Postula",
  description: siteContent.postulaPage.subtitle,
};

export default function PostulaPage() {
  const p = siteContent.postulaPage;
  return (
    <div className="py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.22em] text-cyan-brand/85">
            NEWTON
          </p>
          <h1 className="mt-4 text-center font-heading text-3xl font-medium tracking-tight text-ice sm:text-4xl lg:text-5xl">
            {p.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-mist sm:text-lg">
            {p.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 max-w-2xl rounded-[16px] border border-ice/10 bg-midnight/40 p-6 sm:p-8">
            <h2 className="font-heading text-lg font-medium text-ice">{p.whatWeSeekTitle}</h2>
            <ul className="mt-5 space-y-3" role="list">
              {p.whatWeSeek.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-slate-mist sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-brand/22 text-cyan-brand/80">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-slate-mist">
            {p.closing}
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={siteConfig.microsoftFormUrl} variant="primary" className="min-w-[240px]">
              {p.formCta}
            </CTAButton>
            <CTAButton href="/contacto" variant="secondary" className="min-w-[200px]">
              {p.contactCta}
            </CTAButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-xs text-slate-mist/80">
            Enlace de formulario (placeholder):{" "}
            <span className="break-all font-mono text-cyan-brand/80">{siteConfig.microsoftFormUrl}</span>
          </p>
        </FadeIn>
      </Container>
    </div>
  );
}
