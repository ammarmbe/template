"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";

type TSize = "sm" | "md";

const sizeStyles: Record<TSize, string> = {
  sm: "size-4",
  md: "size-5",
};

const circleSizeStyles: Record<TSize, string> = {
  sm: "size-1.5",
  md: "size-2",
};

const Radio = ({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  ref?: React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Root>>;
}) => {
  return <RadioGroupPrimitive.Root {...props} ref={ref} />;
};

const RadioItem = ({
  className,
  size,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  size: TSize;
  ref?: React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Item>>;
}) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={twMerge(
        "flex items-center justify-center rounded-full border border-primary bg-primary shadow-ring disabled:!border-disabled disabled:!bg-disabled-subtle disabled:!shadow-none data-[state='checked']:border-transparent data-[state='checked']:bg-brand-solid",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={twMerge(
          "rounded-full bg-primary data-[disabled]:!bg-disabled",
          circleSizeStyles[size],
        )}
      />
    </RadioGroupPrimitive.Item>
  );
};

export { Radio, RadioItem };
