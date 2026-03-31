"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { HeaderProvider, useHeaderMenu } from "@/components/layout/HeaderContext";

export function HeaderChrome({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      <HeaderChromeInner>{children}</HeaderChromeInner>
    </HeaderProvider>
  );
}

function HeaderChromeInner({ children }: { children: React.ReactNode }) {
  const { menuOpen } = useHeaderMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300",
        scrolled || menuOpen
          ? "border-b border-ice/8 bg-obsidian/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {children}
    </header>
  );
}
