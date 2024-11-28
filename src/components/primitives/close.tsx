"use client";

import { buttonStyles } from "@/styles/button";
import { X } from "lucide-react";
import type { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export default function Close({
  ref,
  ...props
}: {
  ref?: RefObject<HTMLButtonElement>;
} & JSX.IntrinsicElements["button"]) {
  return (
    <button
      ref={ref}
      {...props}
      className={buttonStyles(
        {
          size: "sm",
          variant: "tertiary",
          symmetrical: true,
        },
        twMerge("text-quinary-hover active:text-quinary", props.className),
      )}
    >
      <X size={20} strokeWidth={3} />
    </button>
  );
}
