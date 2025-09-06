"use client";

import { Bell, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();

  const returnCurrentPage = () => {
    if (pathname === "/") return "Dashboard";
    return pathname.slice(1);
  };

  const truncateUserName = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName} ${lastName.charAt(0)}.`;
  };

  return (
    <nav className="flex items-center justify-between py-2 border-b border-neutral-gray">
      <h1 className="text-2xl capitalize font-semibold">
        Warehouse Inc's {returnCurrentPage()}
      </h1>

      <div className="flex items-center gap-4">
        <button className="btn-secondary flex items-center gap-1 px-4 py-2 pl-3">
          <Search size={24} />
          <span className="text-primary-200">
            Search <span className="font-semibold">[Ctrl+K]</span>
          </span>
        </button>

        <button className="relative btn-secondary p-2">
          <Bell size={24} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full grid place-content-center">
            3
          </div>
        </button>

        {/* TODO: make link go to profile settings tab */}
        <Link
          href="/settings"
          className="btn-secondary pr-2 pl-0 flex items-center gap-2 overflow-hidden"
        >
          <Image
            src={session.data?.user.image || "https://placehold.co/44x44"}
            alt="User Avatar"
            width={44}
            height={44}
            className="rounded-r-lg"
          />

          <div>
            <p className="text-sm">
              {truncateUserName(session.data?.user.name || "Unknown User")}
            </p>
            <p className="capitalize font-normal text-xs">
              {session.data?.user.role}
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
