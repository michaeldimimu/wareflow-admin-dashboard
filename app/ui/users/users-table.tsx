import fetchUsers from "@/app/data/fetchUsers";
import Image from "next/image";
import DeleteUserButton from "./delete-user-button";
import UserRoleToggle from "./user-role-toggle";

// Add filter prop to the component
const UsersTable = async ({ filter }: { filter?: string }) => {
  // Pass the filter to fetchUsers function
  const users = await fetchUsers(filter);

  if (!users.success) {
    return (
      <div className="text-center my-16">
        {users.message || "An error occurred while fetching users."}
      </div>
    );
  }

  if (users.success && users.data?.length === 0) {
    return <div className="text-center my-16">No users found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th className="rounded-tl-lg"></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th className="rounded-tr-lg"></th>
        </tr>
      </thead>
      <tbody>
        {users.data?.map((user: any) => (
          <tr key={user._id}>
            <td className="last:rounded-bl-lg">
              <Image
                src={user.image}
                alt={user.name}
                height={32}
                width={32}
                className="rounded-full"
              />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <UserRoleToggle
                userId={user._id.toString()}
                currentRole={user.role}
              />
            </td>
            <td className="last:rounded-br-lg">
              <DeleteUserButton userId={user._id.toString()} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
