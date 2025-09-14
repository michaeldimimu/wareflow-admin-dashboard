import UserFilterTabs from "@/app/ui/users/user-filter-tabs";
import UsersTable from "@/app/ui/users/users-table";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const UsersPage = ({ searchParams }: { searchParams: { filter?: string } }) => {
  return (
    <>
      <UserFilterTabs />
      <Suspense
        fallback={<Loader2 className="animate-spin mx-auto my-16" size={64} />}
      >
        <UsersTable filter={searchParams.filter || "all"} />
      </Suspense>
    </>
  );
};

export default UsersPage;
