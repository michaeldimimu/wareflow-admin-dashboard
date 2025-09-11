import Image from "next/image";
import SidebarTopLinks from "./sidebar-top-links";
import SidebarBottomLinks from "./sidebar-bottom-links";

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex w-16 md:w-48 flex-col gap-4">
      <div>
        <div className="grid place-content-center bg-white w-full rounded-lg border border-neutral-gray p-2 md:p-4 mb-4">
          <Image
            src="/logo.svg"
            alt="Wareflow logo"
            height={120}
            width={120}
            className="hidden md:block w-full"
          />
          <Image
            src="/logo-icon.svg"
            alt="Wareflow logo"
            height={24}
            width={24}
            className="block md:hidden"
          />
        </div>

        <SidebarTopLinks />
      </div>

      <SidebarBottomLinks />
    </aside>
  );
};

export default Sidebar;
