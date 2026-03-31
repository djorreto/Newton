import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { LogoMark } from "@/components/ui/LogoMark";
import { CTAButton } from "@/components/ui/CTAButton";
import { MobileNav } from "@/components/layout/MobileNav";
import { HEADER_INNER_HEIGHT_PX } from "@/lib/header-constants";

export function HeaderBar() {
  return (
    <div
      className="mx-auto flex w-full max-w-[1280px] shrink-0 items-center justify-between px-6 sm:px-8 lg:px-10"
      style={{ height: HEADER_INNER_HEIGHT_PX }}
    >
      <LogoMark href="/" size="lg" />
      <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Principal">
        {siteContent.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[15px] font-medium text-ice/88 transition-colors hover:text-ice"
          >
            {item.label}
          </Link>
        ))}
        <CTAButton href="/postula" variant="primary" className="px-6 py-2.5 text-[15px] font-semibold">
          Postula
        </CTAButton>
      </nav>
      <MobileNav />
    </div>
  );
}
