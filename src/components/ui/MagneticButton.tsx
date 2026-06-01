"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline" | "white";
  external?: boolean;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  external,
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  const ref2 = useMagnetic<HTMLButtonElement>(0.25);

  const styles = cn(
    "relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform",
    variant === "primary" &&
      "bg-ink text-white hover:bg-primary",
    variant === "outline" &&
      "border border-black/15 bg-white/40 text-ink backdrop-blur hover:bg-white",
    variant === "ghost" &&
      "text-ink hover:text-primary",
    variant === "white" &&
      "bg-white text-ink hover:bg-fresh hover:text-white",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={styles}
      >
        <span className="pointer-events-none">{children}</span>
      </a>
    );
  }

  return (
    <button ref={ref2} onClick={onClick} className={styles}>
      <span className="pointer-events-none">{children}</span>
    </button>
  );
}
