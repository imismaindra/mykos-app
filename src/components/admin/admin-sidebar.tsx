import {
  IconArrowLeft,
  IconBrandTabler,
  IconBuildingSkyscraper,
  IconChartBar,
  IconHomeRibbon,
  IconUsersGroup,
  IconWallet,
} from "@tabler/icons-react";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { motion } from "motion/react";
import Image from "next/image";

export function AdminSidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashbaord",
      icon: (
        <IconChartBar className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Kosan",
      href: "/admin/kos",
      icon: (
        <IconBuildingSkyscraper className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Penyewa",
      href: "/admin/penyewa",
      icon: (
        <IconUsersGroup className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Sewa",
      href: "/admin/sewa",
      icon: (
        <IconHomeRibbon className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Pembayaran",
      href: "/admin/pembayaran",
      icon: (
        <IconWallet className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "My Koskosan",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-2xl whitespace-pre text-black dark:text-white"
      >
        My KosKosan
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
