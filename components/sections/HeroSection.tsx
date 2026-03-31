import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  const { hero } = siteContent;
  return (
    <section
      className="relative overflow-hidden pt-10 pb-28 sm:pt-14 sm:pb-36 lg:pt-16 lg:pb-44"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-28 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-brand/[0.035] blur-[110px] sm:left-auto sm:right-[-100px] sm:translate-x-0 lg:right-[-60px] lg:top-24" />
      <div className="pointer-events-none absolute bottom-0 left-[-140px] h-[260px] w-[260px] rounded-full bg-cyan-brand/[0.025] blur-[100px]" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-20">
          <div className="space-y-9 sm:space-y-10">
            <FadeIn>
              <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand sm:text-[13px] lg:text-left">
                {hero.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1
                id="hero-heading"
                className="text-center font-heading text-[clamp(2.15rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight text-ice lg:text-left"
              >
                {hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mx-auto max-w-xl text-center text-lg leading-relaxed text-slate-mist sm:text-xl lg:mx-0 lg:max-w-2xl lg:text-left">
                {hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <CTAButton href="/postula" variant="primary" className="min-h-[54px] w-full min-w-0 text-base sm:w-auto sm:min-w-[220px]">
                  {hero.primaryCta}
                </CTAButton>
                <CTAButton href="/#que-es" variant="secondary" className="min-h-[54px] w-full min-w-0 text-base sm:w-auto sm:min-w-[220px]">
                  {hero.secondaryCta}
                </CTAButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.22}>
              <p className="text-center text-sm text-slate-mist/80 lg:text-left">{hero.backingNote}</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.1} className="relative hidden min-h-[300px] lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-full max-h-[380px] w-full text-cyan-brand/[0.16]"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden
              >
                <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
                <circle cx="200" cy="200" r="118" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="200" cy="200" r="76" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                <path
                  d="M 40 200 Q 200 80 360 200"
                  stroke="url(#heroGrad)"
                  strokeWidth="0.75"
                  opacity="0.35"
                />
                <defs>
                  <linearGradient id="heroGrad" x1="40" y1="200" x2="360" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#248b9e" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#4a9faf" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#248b9e" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
