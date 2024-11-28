"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

type TSize = "sm" | "md";

const sizeStyles: Record<TSize, string> = {
  sm: "size-4 rounded-xs",
  md: "size-5 rounded-sm",
};

export default function Checkbox({
  className,
  size,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  size: TSize;
  ref?: React.Ref<React.ElementRef<typeof CheckboxPrimitive.Root>>;
}) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={twMerge(
        "border border-primary bg-primary shadow-ring disabled:!border-disabled disabled:!bg-disabled-subtle disabled:!text-disabled data-[state='checked']:border-transparent data-[state='checked']:bg-brand-solid",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={twMerge("flex items-center justify-center text-current")}
      >
        <Check size={size === "sm" ? 12 : 14} strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
