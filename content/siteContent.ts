export type NavItem = {
  label: string;
  href: string;
};

export type PrincipleItem = {
  id: string;
  number: string;
  keyword: string;
  title: string;
  body: string;
};

export type ValueCard = {
  id: string;
  title: string;
  body: string;
};

export type MiniCard = {
  id: string;
  title: string;
  body: string;
};

export const siteContent = {
  meta: {
    title: "NEWTON | Venture Studio B2B",
    description:
      "Venture studio B2B: innovación aplicada, ejecución y crecimiento con dirección. NEWTON.",
  },
  nav: [
    { label: "Qué es NEWTON", href: "/#que-es" },
    { label: "Qué aportamos", href: "/#que-aportamos" },
    { label: "Principios", href: "/#principios" },
    { label: "Postula", href: "/postula" },
    { label: "Contacto", href: "/contacto" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "VENTURE STUDIO B2B",
    headline: "Innovación aplicada. Ejecución real.",
    subheadline:
      "Impulsamos compañías tecnológicas B2B con criterio, red y tracción — sin humo.",
    primaryCta: "Postula",
    secondaryCta: "Qué es NEWTON",
    backingNote: "Con respaldo Xinergy · Dux",
  },
  whatIsNewton: {
    id: "que-es",
    title: "Qué es NEWTON",
    paragraphs: [
      "Plataforma de crecimiento e innovación aplicada: eficiencia, dirección y ejecución para escalar en entornos reales.",
      "No somos un fondo pasivo. Somos socio de crecimiento: criterio, red y trabajo activo — con identidad propia.",
    ],
    miniCards: [
      {
        id: "applied",
        title: "Innovación aplicada",
        body: "Problemas reales, adopción concreta.",
      },
      {
        id: "direction",
        title: "Dirección",
        body: "Crecimiento con estructura y visión de largo plazo.",
      },
      {
        id: "ecosystem",
        title: "Red y ejecución",
        body: "Oportunidades, corporates y acompañamiento activo.",
      },
    ] satisfies MiniCard[],
  },
  whatWeOffer: {
    id: "que-aportamos",
    title: "Qué aportamos",
    subtitle: "Fuerza aplicada al crecimiento — no solo capital.",
    cards: [
      {
        id: "1",
        title: "Estrategia",
        body: "Decisiones de crecimiento, posicionamiento y expansión.",
      },
      {
        id: "2",
        title: "Red",
        body: "Corporates, aliados y validación en contexto real.",
      },
      {
        id: "3",
        title: "Ejecución comercial",
        body: "Potencial → tracción, pipeline, resultados.",
      },
      {
        id: "4",
        title: "Escala regional",
        body: "Trayectoria sólida más allá del mercado inicial.",
      },
      {
        id: "5",
        title: "Involucramiento",
        body: "Socios de crecimiento — no observadores.",
      },
      {
        id: "6",
        title: "Sustancia",
        body: "Criterio y credibilidad detrás del proyecto.",
      },
    ] satisfies ValueCard[],
  },
  principles: {
    id: "principios",
    title: "Principios de NEWTON",
    eyebrow: "CÓMO OPERAMOS",
    subtitle: "Dirección, fuerza y criterio — sin ruido.",
    items: [
      {
        id: "p1",
        number: "01",
        keyword: "INERCIA",
        title: "Rompemos la inercia",
        body: "Potencial → movimiento: foco, red y ejecución.",
      },
      {
        id: "p2",
        number: "02",
        keyword: "FUERZA",
        title: "Fuerza con dirección",
        body: "Empujar donde importa — con criterio y trabajo activo.",
      },
      {
        id: "p3",
        number: "03",
        keyword: "ACELERACIÓN",
        title: "Aceleración con sentido",
        body: "Tracción y expansión sostenible — no solo velocidad.",
      },
      {
        id: "p4",
        number: "04",
        keyword: "GRAVEDAD PROPIA",
        title: "Gravedad propia",
        body: "Las oportunidades se atraen con visión y sustancia.",
      },
      {
        id: "p5",
        number: "05",
        keyword: "ENERGÍA",
        title: "Energía → valor",
        body: "Cada esfuerzo debe rendir en ventaja tangible.",
      },
      {
        id: "p6",
        number: "06",
        keyword: "MOVIMIENTO",
        title: "Del discurso a lo real",
        body: "Pilotos, clientes, expansión — por encima del pitch.",
      },
    ] satisfies PrincipleItem[],
  },
  audience: {
    id: "audiencia",
    title: "A quién buscamos",
    intro: "B2B tech con base sólida, problema real y ambición de escalar.",
    bullets: [
      "Modelo B2B y producto claro",
      "Validación inicial (técnica o comercial)",
      "Potencial de piloto o integración con grandes cuentas",
      "Founders con foco de ejecución",
    ],
    closing: "Construir en serio — en mercados reales.",
  },
  backing: {
    id: "respaldo",
    title: "Respaldo",
    paragraphs: [
      "NEWTON se apoya en la trayectoria de Xinergy y Dux (eficiencia, estrategia, negocio real). La voz y la propuesta son propias de NEWTON.",
    ],
  },
  finalCta: {
    id: "postula",
    title: "¿Construyes con sustancia?",
    body: "Buscamos equipos B2B con ambición y capacidad de ejecutar. Si encaja, hablemos.",
    primaryCta: "Postula",
    secondaryCta: "Contacto",
  },
  footer: {
    line: "Innovación con gravedad propia.",
  },
  postulaPage: {
    title: "Postula a NEWTON",
    subtitle: "Compañías B2B tech con base, validación inicial y ganas de escalar.",
    whatWeSeekTitle: "Qué buscamos",
    whatWeSeek: [
      "Modelo B2B",
      "Validación inicial",
      "Potencial de piloto o escala",
      "Equipo comprometido",
      "Ambición de crecimiento",
    ],
    closing: "Si es tu caso, queremos conocerte.",
    formCta: "Ir al formulario",
    contactCta: "Contacto",
  },
  contactPage: {
    title: "Contacto",
    intro: "Para alianzas o dudas sobre la propuesta — conectamos.",
    postulaButton: "Postula",
  },
} as const;

export type SiteContent = typeof siteContent;
