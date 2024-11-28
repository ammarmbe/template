import { twMerge } from "tailwind-merge";

type TSizes = "sm" | "md";

const sizeStyles: Record<TSizes, string> = {
  sm: "py-2 px-3",
  md: "py-2.5 px-3.5",
};

export const inputStyles = (
  {
    size,
    error = false,
  }: {
    size: TSizes;
    error?: boolean;
  },
  className?: string,
) => {
  const baseStyles =
    "relative rounded-md text-md border bg-primary shadow-xs placeholder:text-placeholder disabled:!bg-disabled-subtle disabled:!text-disabled disabled:!border-disabled disabled:!shadow-xs h-fit truncate";

  const defaultStyles =
    "border-primary focus:border-brand focus:shadow-[0px_1px_2px_#0A0D120D,0px_0px_0px_1px_var(--brand-500)_inset]";

  const errorStyles =
    "border-error-subtle focus:border-error focus:shadow-[0px_1px_2px_#0A0D120D,0px_0px_0px_1px_var(--error-500)_inset]";

  return twMerge(
    baseStyles,
    sizeStyles[size],
    error ? errorStyles : defaultStyles,
    className,
  );
};

export const labelStyles = (required?: boolean, className?: string) => {
  const baseStyles = "text-sm font-medium text-secondary";

  const requiredStyles = 'after:content-["_*"] after:text-brand-tertiary';

  return twMerge(baseStyles, required ? requiredStyles : undefined, className);
};

export const helperTextStyles = (required?: boolean, className?: string) => {
  const baseStyles = "text-sm";

  const defaultStyles = "text-tertiary";

  const requiredStyles = "text-error-primary";

  return twMerge(
    baseStyles,
    required ? requiredStyles : defaultStyles,
    className,
  );
};
