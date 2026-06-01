"use client";

import { useMemo, createElement } from "react";
import { cn } from "@/lib/utils";

type TagName = "h1" | "h2" | "h3" | "p" | "span";

type Props = {
  children: string;
  as?: TagName;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  by?: "word" | "line";
  once?: boolean;
  start?: string;
};

export default function SplitText({
  children,
  as: Tag = "h2",
  className,
  by = "word",
}: Props) {
  const tokens = useMemo(
    () => (by === "word" ? children.split(" ") : children.split("\n")),
    [children, by],
  );

  return createElement(
    Tag,
    { className: cn(className) },
    tokens.map((token, i) =>
      createElement(
        "span",
        {
          key: `${i}-${token}`,
          className: "inline-block overflow-hidden align-bottom",
        },
        createElement(
          "span",
          {
            className: "inline-block",
          },
          `${token === "" ? "\u00a0" : token}${by === "word" ? "\u00a0" : ""}`,
        ),
      ),
    ),
  );
}
