"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LoaderCircle, LogOut, Settings2 } from "lucide-react";

const SidebarBottomLinks = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 bg-white border border-neutral-gray rounded-lg p-2 md:p-4">
      <li
        className={`${pathname === "/settings" && "bg-primary-100"} rounded-md`}
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
          disabled={isLoggingOut}
          onClick={async () => {
            setIsLoggingOut(true);
            try {
              await signOut();
            } catch (error) {
              console.error("Logout failed:", error);
            } finally {
              setIsLoggingOut(false);
            }
          }}
          className="flex items-center gap-2 px-3 py-2 font-medium rounded-md w-full text-status-error hover:bg-status-error/10 transition-colors duration-300"
        >
          {isLoggingOut ? (
            <LoaderCircle className="min-h-[20px] min-w-[20px] animate-spin" />
          ) : (
            <LogOut className="min-h-[20px] min-w-[20px]" />
          )}

          <span className="hidden md:block">
            {isLoggingOut ? "Logging out" : "Log out"}
          </span>
        </button>
      </li>
    </ul>
  );
};

export default SidebarBottomLinks;
