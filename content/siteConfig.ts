/**
 * Central configuration — replace placeholders before production.
 */
export const siteConfig = {
  name: "NEWTON",
  tagline: "Innovación con gravedad propia.",
  /** Base URL for metadata / Open Graph (no trailing slash) */
  siteUrl: "https://newton-placeholder.com",
  microsoftFormUrl: "https://forms.microsoft.com/PLACEHOLDER",
  linkedInUrl: "https://www.linkedin.com/company/PLACEHOLDER",
  xinergyUrl: "https://xinergy.cl",
  duxUrl: "https://duxpartners.cl",
  contactEmail: "contacto@newton-placeholder.com",
  locale: "es",
  /** Logos en /public/logos (Xinergy exportado desde PNG blanco sobre negro → RGBA con fondo transparente). */
  partnerLogos: {
    xinergyBlanco: {
      src: "/logos/xinergy.png?v=5",
      width: 1600,
      height: 254,
      alt: "Xinergy",
    },
    duxBlanco: {
      src: "/logos/dux-blanco.png",
      width: 326,
      height: 52,
      alt: "DUXPARTNERS — supply chain empowerment",
    },
    dux: {
      src: "/logos/dux.png",
      width: 409,
      height: 65,
      alt: "DUXPARTNERS — supply chain empowerment",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
