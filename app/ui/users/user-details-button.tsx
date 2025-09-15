"use client";

import { EllipsisVertical } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const UserDetailsButton = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleShowDetails = () => {
    const params = new URLSearchParams(searchParams);
    const currentDetails = params.get("showDetails");

    if (currentDetails === userId) {
      params.delete("showDetails");
    } else {
      params.set("showDetails", userId);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button onClick={handleShowDetails} className="grid place-content-center">
      <EllipsisVertical />
    </button>
  );
};

export default UserDetailsButton;
