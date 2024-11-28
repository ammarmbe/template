import { twMerge } from "tailwind-merge";

type TSizes = "sm" | "md" | "lg" | "xl" | "2xl";
type TVariants = "primary" | "secondary" | "tertiary" | "danger";

const sizeStyles: Record<TSizes, string> = {
  sm: "rounded-md py-2 px-3 gap-1 text-sm",
  md: "rounded-md py-2.5 px-3.5 gap-1 text-sm",
  lg: "rounded-md py-2.5 px-4 gap-1.5 text-md",
  xl: "rounded-md py-3 px-[1.125rem] gap-1.5 text-md",
  "2xl": "rounded-lg py-4 px-[1.375rem] gap-2 text-lg",
};

const symmetricalStyles: Record<TSizes, string> = {
  sm: "px-2",
  md: "px-2.5",
  lg: "px-2.5",
  xl: "px-3",
  "2xl": "px-4",
};

const variantStyles: Record<TVariants, string> = {
  primary: `
    group primary-button text-white border-transparent
    bg-brand-600 hover:bg-brand-700 active:bg-brand-600
    before:absolute before:-inset-px before:rounded-[inherit] before:shadow-xs-skeumorphic-ring
    disabled:!bg-disabled disabled:!border-disabled-subtle disabled:before:!hidden disabled:after:!hidden disabled:!shadow-xs disabled:!text-disabled
  `,
  // TODO: prevent duplication of the skeumorphic shadow
  secondary: `
    border-primary bg-primary-alt hover:bg-primary-hover text-secondary-hover active:bg-primary active:text-secondary
    shadow-[0px_-1px_0px_0px_#0a0d120d_inset,0px_1px_2px_0px_#0a0d120d] active:shadow-[0px_-1px_0px_0px_#0a0d120d_inset,0px_1px_2px_0px_#0a0d120d,0px_0px_0px_2px_var(--background,light-dark(white,var(--gray-950))),0px_0px_0px_4px_var(--brand-500)]
    disabled:!bg-primary disabled:!border-disabled-subtle disabled:!shadow-xs disabled:!text-disabled
  `,
  tertiary: `
    bg-primary-hover border-transparent text-secondary-hover shadow-ring active:bg-primary active:text-secondary
    disabled:!bg-primary disabled:!shadow-none disabled:!text-disabled
  `,
  danger: `
    group primary-button text-white border-transparent
    bg-error-600 hover:bg-error-700 active:bg-error-600
    before:absolute before:-inset-px before:rounded-[inherit] before:shadow-xs-skeumorphic-ring-error
    disabled:!bg-disabled disabled:!border-disabled-subtle disabled:before:!hidden disabled:after:!hidden disabled:!shadow-xs disabled:!text-disabled
  `,
};

export const buttonStyles = (
  {
    size,
    variant,
    symmetrical = false,
  }: {
    size: TSizes;
    variant: TVariants;
    symmetrical?: boolean;
  },
  className?: string,
) => {
  const baseStyles =
    "relative flex items-center justify-center border font-semibold h-fit w-fit";

  return twMerge(
    baseStyles,
    sizeStyles[size],
    symmetrical ? symmetricalStyles[size] : undefined,
    variantStyles[variant],
    className,
  );
};
