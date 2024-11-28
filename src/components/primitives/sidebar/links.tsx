"use client";

import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
];

export default function Links() {
  const pathname = usePathname();

  return (
    <div className="mt-5 flex flex-col px-2 md:px-4">
      {links.map((link) => (
        <a key={link.title} href={link.href} className="py-0.5">
          <span
            className={`flex cursor-pointer items-center gap-2.5 rounded-sm bg-primary-hover px-2.5 py-2 pr-16 text-sm font-semibold text-secondary-hover disabled:!text-disabled [&>svg]:!text-quaternary disabled:[&>svg]:!text-quinary ${
              pathname === link.href
                ? "bg-active text-primary"
                : "bg-primary-hover text-secondary-hover"
            }`}
          >
            {link.icon && <link.icon size={20} />}
            <span>{link.title}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
