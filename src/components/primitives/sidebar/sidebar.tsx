import Image from "next/image";
import Links from "./links";
import SidebarProvider from "./sidebar-provider";

export default function Sidebar() {
  return (
    <SidebarProvider>
      <div className="flex flex-grow flex-col">
        <Image
          width={32}
          height={32}
          src="/logo.svg"
          alt="Logo"
          className="m-4 !mb-0 md:m-5"
        />
        <Links />
      </div>
    </SidebarProvider>
  );
}
