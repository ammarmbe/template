"use client";

import { buttonStyles } from "@/styles/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Drawer } from "vaul";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

export default function SidebarProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <>
      <nav className="m-1 hidden flex-col rounded-xl border shadow-xs md:flex">
        {children}
      </nav>
      <Drawer.Root direction="left" modal={false}>
        <header className="flex w-full items-center justify-between border-b bg-primary p-3 md:hidden">
          <Image width={32} height={32} src="/logo.svg" alt="Logo" />
          <Drawer.Trigger
            className={buttonStyles(
              {
                size: "sm",
                variant: "tertiary",
                symmetrical: true,
              },
              "data-[state='open']:shadow-none",
            )}
          >
            <Menu size={24} />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Close className="fixed inset-0 z-10 cursor-auto bg-black/40" />
            <Drawer.Close
              className={buttonStyles(
                {
                  size: "sm",
                  variant: "tertiary",
                  symmetrical: true,
                },
                "absolute right-3 top-3 z-20",
              )}
            >
              <X size={24} />
            </Drawer.Close>
            <Drawer.Content className="fixed bottom-0 left-0 top-0 z-20 flex w-3/4 max-w-72 flex-col bg-primary shadow-xl outline-none">
              <VisuallyHidden>
                <Drawer.Title>Navigation</Drawer.Title>
                <Drawer.Description>Navigation for the site</Drawer.Description>
              </VisuallyHidden>
              {children}
            </Drawer.Content>
          </Drawer.Portal>
        </header>
      </Drawer.Root>
    </>
  );
}
