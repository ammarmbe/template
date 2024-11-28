"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

const DropdownTrigger = DropdownMenuPrimitive.Trigger;
const DropdownGroup = DropdownMenuPrimitive.Group;
const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

const Dropdown = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) => (
  <DropdownMenuPrimitive.Root {...props} modal={props.modal ?? false} />
);

const DropdownContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  ref?: React.Ref<React.ElementRef<typeof DropdownMenuPrimitive.Content>>;
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        "mt-2 flex flex-col rounded-lg border border-secondary bg-primary py-1 shadow-lg",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

const DropdownItem = ({
  className,
  inset,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  ref?: React.Ref<React.ElementRef<typeof DropdownMenuPrimitive.Item>>;
}) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={twMerge("px-[0.3125rem] py-px", inset && "pl-8", className)}
    {...props}
  >
    <span className="flex cursor-pointer items-center gap-2 rounded-sm bg-primary-hover px-2.5 py-2 text-sm font-semibold text-secondary-hover disabled:!text-disabled [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary">
      {props.children}
    </span>
  </DropdownMenuPrimitive.Item>
);

const DropdownCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
  ref?: React.Ref<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>>;
}) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={twMerge("group px-[0.3125rem] py-px", className)}
    checked={checked}
    {...props}
  >
    <span className="flex cursor-pointer items-center gap-5 rounded-sm bg-primary-hover px-2.5 py-2 text-sm font-semibold text-secondary-hover disabled:!text-disabled group-data-[state='checked']:bg-active group-data-[state='checked']:text-primary [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary">
      <span className="flex flex-grow items-center gap-2 [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary">
        {children}
      </span>
      <DropdownMenuPrimitive.ItemIndicator className="text-brand-primary disabled:text-disabled">
        <Check size={20} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
  </DropdownMenuPrimitive.CheckboxItem>
);

const DropdownRadioItem = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
  ref?: React.Ref<React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>>;
}) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={twMerge("group px-[0.3125rem] py-px", className)}
    {...props}
  >
    <span className="flex cursor-pointer items-center gap-5 rounded-sm bg-primary-hover px-2.5 py-2 text-sm font-semibold text-secondary-hover disabled:!text-disabled group-data-[state='checked']:bg-active group-data-[state='checked']:text-primary [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary">
      <span className="flex flex-grow items-center gap-2 [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary">
        {children}
      </span>
      <DropdownMenuPrimitive.ItemIndicator className="text-brand-primary disabled:text-disabled">
        <Check size={20} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
  </DropdownMenuPrimitive.RadioItem>
);

const DropdownSeparator = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & {
  ref?: React.Ref<React.ElementRef<typeof DropdownMenuPrimitive.Separator>>;
}) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={twMerge("my-1 border-t border-secondary", className)}
    {...props}
  />
);

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownGroup,
  DropdownRadioGroup,
};
