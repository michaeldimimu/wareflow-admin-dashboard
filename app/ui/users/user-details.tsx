import fetchUser from "@/app/data/fetchUser";
import HideUserDetailsButton from "./hide-user-details-button";
import Image from "next/image";

const UserDetails = async ({ userId }: { userId: string }) => {
  const user = await fetchUser(userId);

  return (
    <div className="absolute top-0 right-4 w-1/3 max-h-[80vh] p-4 pb-8 bg-white border border-neutral-gray rounded-lg">
      {user.success ? (
        <>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold">User Details</h2>
            <HideUserDetailsButton />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src={user.data.image || "https://placehold.co/72x72"}
              alt={user.data.name || "Profile Image"}
              width={72}
              height={72}
              className="rounded-full"
            />
            <div className="text-center">
              <p className="font-semibold text-xl">{user.data.name}</p>
              <p>{user.data.email}</p>
              <p className="font-semibold capitalize mt-2">{user.data.role}</p>
            </div>
          </div>
        </>
      ) : (
        <p>{user.message}</p>
      )}
    </div>
  );
};

export default UserDetails;
