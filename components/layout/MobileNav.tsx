"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { CTAButton } from "@/components/ui/CTAButton";
import { useHeaderMenu } from "@/components/layout/HeaderContext";
import { HEADER_INNER_HEIGHT_PX } from "@/lib/header-constants";

export function MobileNav() {
  const { menuOpen: open, setMenuOpen: setOpen } = useHeaderMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay =
    mounted && open
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-55 bg-obsidian/70 backdrop-blur-sm lg:hidden"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-menu"
              style={{ top: HEADER_INNER_HEIGHT_PX }}
              className="fixed inset-x-0 z-60 max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-ice/10 bg-obsidian/98 px-5 py-6 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col gap-1" aria-label="Móvil">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="min-h-[52px] rounded-lg px-3 py-3 text-[17px] font-medium text-ice transition hover:bg-cyan-brand/[0.07]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="flex items-center gap-2 lg:hidden">
        <CTAButton href="/postula" variant="primary" className="min-h-12 px-4 py-2.5 text-[15px] font-semibold">
          Postula
        </CTAButton>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ice/15 text-ice transition hover:border-cyan-brand/25 hover:bg-cyan-brand/[0.05] focus-visible:focus-ring"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>
      {overlay}
    </>
  );
}
