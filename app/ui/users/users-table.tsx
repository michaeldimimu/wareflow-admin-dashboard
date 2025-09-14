import fetchUsers from "@/app/data/fetchUsers";
import { Settings2 } from "lucide-react";
import Image from "next/image";

// Add filter prop to the component
const UsersTable = async ({ filter }: { filter?: string }) => {
  // Pass the filter to fetchUsers function
  const users = await fetchUsers(filter);

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
            <td>{user.role}</td>
            <td className="last:rounded-br-lg">
              <button className="btn btn-secondary flex items-center gap-2 text-sm py-1 px-2 pr-1.5">
                <span>Actions</span>
                <Settings2 size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
