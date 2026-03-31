"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { PrincipleItem } from "@/content/siteContent";

type PrincipleCardProps = {
  item: PrincipleItem;
  className?: string;
};

export function PrincipleCard({ item, className }: PrincipleCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative flex min-h-[220px] flex-col overflow-hidden rounded-[18px] border border-ice/[0.07] bg-midnight/50 pl-6 pr-5 pt-7 pb-6 backdrop-blur-sm sm:min-h-[240px] sm:pl-8 sm:pr-7 sm:pt-9 sm:pb-8",
        "border-l-[3px] border-l-cyan-brand/35 shadow-card",
        "transition-[border-color,box-shadow,background-color] duration-300",
        "hover:border-ice/[0.1] hover:bg-midnight/65 hover:shadow-[0_0_0_1px_rgba(74,159,175,0.08)]",
        className,
      )}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="pointer-events-none absolute right-0 top-0 translate-x-[12%] font-heading text-[5.5rem] font-medium leading-none tracking-tight text-ice/[0.035] transition-opacity duration-300 group-hover:text-cyan-brand/[0.06] sm:text-[6.5rem] lg:text-[7rem]"
        aria-hidden
      >
        {item.number}
      </span>

      <div className="relative z-10 flex flex-1 flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <span className="font-heading text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-mist/90 sm:text-sm">
            {item.number} · <span className="text-cyan-brand">{item.keyword}</span>
          </span>
          <h3 className="font-heading text-2xl font-medium tracking-tight text-ice sm:text-[1.75rem] sm:leading-tight lg:text-[2.05rem] lg:leading-[1.15]">
            {item.title}
          </h3>
        </div>
        <p className="max-w-[42ch] text-base leading-relaxed text-slate-mist/90 sm:text-[17px]">{item.body}</p>
      </div>
    </motion.article>
  );
}
