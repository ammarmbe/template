"use client";

import { X } from "lucide-react";
import type { RefObject } from "react";
import { twMerge } from "tailwind-merge";

type TSize = "sm" | "md" | "lg";
type TColor =
  | "gray"
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "green"
  | "cyan"
  | "blue"
  | "purple"
  | "red"
  | "orange";

const sizeStyles: Record<TSize, string> = {
  sm: "text-xs py-0.5 px-2",
  md: "text-sm py-0.5 px-2.5",
  lg: "text-sm py-1 px-3",
};

const closeButtonSizeStyles: Record<TSize, string> = {
  sm: "p-[0.1875rem]",
  md: "p-1",
  lg: "p-1.5",
};

const colorStyles: Record<TColor, string> = {
  gray: "bg-utility-gray-50 border-utility-gray-200 text-utility-gray-700",
  brand: "bg-utility-brand-50 border-utility-brand-200 text-utility-brand-700",
  error: "bg-utility-error-50 border-utility-error-200 text-utility-error-700",
  warning:
    "bg-utility-warning-50 border-utility-warning-200 text-utility-warning-700",
  success:
    "bg-utility-success-50 border-utility-success-200 text-utility-success-700",
  green: "bg-utility-green-50 border-utility-green-200 text-utility-green-700",
  cyan: "bg-utility-cyan-50 border-utility-cyan-200 text-utility-cyan-700",
  blue: "bg-utility-blue-50 border-utility-blue-200 text-utility-blue-700",
  purple:
    "bg-utility-purple-50 border-utility-purple-200 text-utility-purple-700",
  red: "bg-utility-red-50 border-utility-red-200 text-utility-red-700",
  orange:
    "bg-utility-orange-50 border-utility-orange-200 text-utility-orange-700",
};

const closeButtonColorStyles: Record<TColor, string> = {
  gray: "group-hover:bg-utility-gray-100",
  brand: "group-hover:bg-utility-brand-100",
  error: "group-hover:bg-utility-error-100",
  warning: "group-hover:bg-utility-warning-100",
  success: "group-hover:bg-utility-success-100",
  green: "group-hover:bg-utility-green-100",
  cyan: "group-hover:bg-utility-cyan-100",
  blue: "group-hover:bg-utility-blue-100",
  purple: "group-hover:bg-utility-purple-100",
  red: "group-hover:bg-utility-red-100",
  orange: "group-hover:bg-utility-orange-100",
};

export default function Badge({
  ref,
  size,
  text,
  color,
  onClose,
  ...props
}: {
  ref?: RefObject<HTMLDivElement>;
  size: TSize;
  text: string;
  color: TColor;
  onClose?: () => void;
} & JSX.IntrinsicElements["div"]) {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        "flex h-fit w-fit items-center rounded-full border font-medium",
        colorStyles[color],
        props.className,
      )}
    >
      <span
        className={twMerge(sizeStyles[size], !!onClose ? "pr-0" : undefined)}
      >
        {text}
      </span>
      {!!onClose ? (
        <button
          onClick={onClose}
          className={twMerge("group flex", closeButtonSizeStyles[size])}
        >
          <span
            className={twMerge(
              "rounded-full p-0.5",
              closeButtonColorStyles[color],
            )}
          >
            <X size={12} strokeWidth={3} />
          </span>
        </button>
      ) : null}
    </div>
  );
}
