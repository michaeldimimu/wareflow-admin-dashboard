"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, Package, Truck, Users } from "lucide-react";

const sidebarItems = [
  {
    id: 0,
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    id: 1,
    label: "Users",
    icon: Users,
    href: "/users",
  },
  {
    id: 2,
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    id: 3,
    label: "Shipments",
    icon: Truck,
    href: "/shipments",
  },
];

const SidebarTopLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 bg-white border border-neutral-gray rounded-lg p-1 sm:p-2 md:p-4">
      {sidebarItems.map((item: any) => (
        <li
          key={item.id}
          className={`${
            pathname === item.href
              ? "bg-primary-100"
              : "hover:bg-primary-100/50"
          } rounded-md transition duration-300`}
        >
          <Link
            href={item.href}
            className="flex items-center justify-center md:justify-start gap-2 px-3 py-2 font-medium"
          >
            <item.icon className="min-h-[20px] min-w-[20px]" />
            <span className="hidden md:block">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarTopLinks;
