import HideUserDetailsButton from "./hide-user-details-button";

const UserDetails = ({ userId }: { userId: string }) => {
  return (
    <div className="absolute top-0 right-4 w-1/2 min-h-[80vh] p-4 shadow-md bg-white border border-neutral-gray rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">User Details - {userId}</h2>
        <HideUserDetailsButton />
      </div>
    </div>
  );
};

export default UserDetails;
