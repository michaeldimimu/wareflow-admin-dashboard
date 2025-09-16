"use client";

import { ArrowLeftRight, Settings2, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const UserActionsButton = ({ userId }: { userId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="btn btn-secondary flex items-center gap-2 text-sm py-1 px-2 pr-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Actions</span>
        <Settings2 size={20} />
      </button>

      {isOpen && (
        <ul className="absolute z-10 px-2 right-0 top-[calc(100%+4px)] bg-white rounded-lg border border-neutral-gray w-max">
          <li className="py-2 pr-1 border-b border-neutral-gray">
            <button className="flex items-center gap-2 text-sm text-left whitespace-nowrap">
              <ArrowLeftRight size={16} />
              <span>Change role</span>
            </button>
          </li>
          <li className="py-2 pr-1 text-status-error">
            <button className="flex items-center gap-2 text-sm text-left whitespace-nowrap">
              <Trash2 size={16} />
              <span>Delete user</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserActionsButton;
