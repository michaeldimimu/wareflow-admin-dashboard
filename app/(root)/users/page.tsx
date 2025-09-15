import UserDetails from "@/app/ui/users/user-details";
import UserFilterTabs from "@/app/ui/users/user-filter-tabs";
import UsersTable from "@/app/ui/users/users-table";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; showDetails?: string }>;
}) => {
  const { filter, showDetails } = await searchParams;
  return (
    <div className="relative">
      <UserFilterTabs />
      <Suspense
        fallback={<Loader2 className="animate-spin mx-auto my-16" size={64} />}
      >
        <UsersTable filter={filter || "all"} />
      </Suspense>
      {showDetails && <UserDetails userId={showDetails} />}
    </div>
  );
};

export default UsersPage;
