import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-ice/[0.07] bg-midnight/55 p-6 shadow-card backdrop-blur-sm transition-all duration-300 sm:p-8",
        interactive &&
          "hover:-translate-y-0.5 hover:border-cyan-brand/18 hover:shadow-glow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
