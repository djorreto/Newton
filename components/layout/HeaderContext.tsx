"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type HeaderCtx = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((b: boolean) => boolean)) => void;
};

const HeaderContext = createContext<HeaderCtx | null>(null);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const value = useMemo(() => ({ menuOpen, setMenuOpen }), [menuOpen]);
  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}

export function useHeaderMenu() {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error("useHeaderMenu must be used within HeaderProvider");
  return ctx;
}
