import { HeaderChrome } from "@/components/layout/HeaderChrome";
import { HeaderBar } from "@/components/layout/HeaderBar";

/** Server Component: barra renderizada en RSC; interacción solo en MobileNav / HeaderChrome */
export function Header() {
  return (
    <HeaderChrome>
      <HeaderBar />
    </HeaderChrome>
  );
}
