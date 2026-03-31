import { cn } from "@/lib/cn";

type SectionTitleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** Más aire entre título y subtítulo */
  spacious?: boolean;
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  spacious = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        spacious && "space-y-6 sm:space-y-7",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-cyan-brand/88">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-[2rem] font-medium tracking-tight text-ice sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-slate-mist sm:text-xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
