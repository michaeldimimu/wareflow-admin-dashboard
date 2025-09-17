import UserDetails from "@/app/ui/users/user-details";
import UserFilterTabs from "@/app/ui/users/user-filter-tabs";
import UsersTable from "@/app/ui/users/users-table";
import getCachedSession from "@/auth/lib/getCachedSession";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; showDetails?: string }>;
}) => {
  const session = await getCachedSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const { filter, showDetails } = await searchParams;
  return (
    <div className="relative">
      <UserFilterTabs />
      <Suspense
        fallback={<Loader2 className="animate-spin mx-auto my-16" size={64} />}
      >
        <UsersTable filter={filter || "all"} loggedInUser={session.user} />
      </Suspense>
      {showDetails && <UserDetails userId={showDetails} />}
    </div>
  );
};

export default UsersPage;
