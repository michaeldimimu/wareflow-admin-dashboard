"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const UserFilterTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const handleFilterChange = (newFilter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter", newFilter);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 items-center my-4">
      <p className="font-bold">Show:</p>
      <div className="flex gap-2">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-2 py-1 ${
            filter === "all" ? "btn-primary" : "btn-secondary"
          }`}
        >
          All users
        </button>
        <button
          onClick={() => handleFilterChange("worker")}
          className={`px-2 py-1 ${
            filter === "worker" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Workers only
        </button>
        <button
          onClick={() => handleFilterChange("manager")}
          className={`px-2 py-1 ${
            filter === "manager" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Managers only
        </button>
        <button
          onClick={() => handleFilterChange("admin")}
          className={`px-2 py-1 ${
            filter === "admin" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Admins only
        </button>
      </div>
    </div>
  );
};

export default UserFilterTabs;
