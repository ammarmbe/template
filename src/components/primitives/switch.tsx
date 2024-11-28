"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

type TSize = "sm" | "md";

const sizeStyles: Record<TSize, string> = {
  sm: "w-8 h-4",
  md: "w-10 h-5",
};

const thumbSizeStyles: Record<TSize, string> = {
  sm: "size-4 data-[state='checked']:translate-x-4",
  md: "size-5 data-[state='checked']:translate-x-5",
};

export default function Switch({
  className,
  size,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  size: TSize;
  ref?: React.Ref<React.ElementRef<typeof SwitchPrimitives.Root>>;
}) {
  return (
    <SwitchPrimitives.Root
      className={twMerge(
        "group flex cursor-pointer items-center rounded-full border border-secondary bg-brand-solid-hover disabled:!border-disabled-subtle disabled:!bg-disabled data-[state='checked']:border-transparent data-[state='unchecked']:bg-tertiary",
        sizeStyles[size],
        className,
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={twMerge(
          // TODO: prevent duplication of bg-brand-solid-hover
          "block -translate-x-px rounded-full border border-secondary bg-white data-[state='checked']:border-[var(--brand-600)] data-[disabled]:!bg-disabled-subtle data-[state='checked']:group-hover:border-[light-dark(var(--brand-700),_var(--brand-500))]",
          thumbSizeStyles[size],
        )}
      />
    </SwitchPrimitives.Root>
  );
}
