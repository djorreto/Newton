import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/content/siteConfig";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: siteContent.contactPage.intro,
};

export default function ContactoPage() {
  const c = siteContent.contactPage;
  return (
    <div className="py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <h1 className="text-center font-heading text-3xl font-medium tracking-tight text-ice sm:text-4xl lg:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-mist sm:text-lg">
            {c.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-6 rounded-[16px] border border-ice/10 bg-midnight/40 p-8 sm:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-mist">Email</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-1 inline-block text-lg font-medium text-cyan-brand/95 transition hover:text-ice focus-visible:rounded focus-visible:focus-ring"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-mist">LinkedIn</p>
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-ice transition hover:text-cyan-brand/90 focus-visible:rounded focus-visible:focus-ring"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                Perfil de NEWTON (placeholder)
              </a>
            </div>
            <CTAButton href="/postula" variant="primary" className="mt-2 w-full justify-center sm:w-auto">
              {c.postulaButton}
            </CTAButton>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
