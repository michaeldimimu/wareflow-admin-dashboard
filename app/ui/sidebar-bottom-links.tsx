"use client";

import { LogOut, Settings2 } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarBottomLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 bg-white border border-neutral-gray rounded-lg p-2 md:p-4">
      <li
        className={`${pathname === "settings" && "bg-primary-100"} rounded-md`}
      >
        <Link
          href="/settings"
          className="flex items-center gap-2 px-3 py-2 font-medium"
        >
          <Settings2 className="min-h-[20px] min-w-[20px]" />
          <span className="hidden md:block">Settings</span>
        </Link>
      </li>

      <li>
        <button
          onClick={async () => await signOut()}
          className="flex items-center gap-2 px-3 py-2 font-medium rounded-md w-full text-status-error hover:bg-status-error/10 transition-colors duration-300"
        >
          <LogOut className="min-h-[20px] min-w-[20px]" />
          <span className="hidden md:block">Log out</span>
        </button>
      </li>
    </ul>
  );
};

export default SidebarBottomLinks;
