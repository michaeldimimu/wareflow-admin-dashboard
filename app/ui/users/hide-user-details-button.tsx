"use client";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const HideUserDetailsButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("showDetails");
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-secondary size-8 grid place-content-center"
    >
      <X />
    </button>
  );
};

export default HideUserDetailsButton;
