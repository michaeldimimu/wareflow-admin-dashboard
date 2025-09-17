"use client";

import updateUserRole from "@/app/actions/updateUserRole";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const UserRoleToggle = ({
  userId,
  userRole,
  loggedInUser,
}: {
  userId: string;
  userRole: string;
  loggedInUser: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateRole = async (newRole: string) => {
    setIsLoading(true);

    const response = await updateUserRole(userId, newRole);
    if (response) {
      setIsLoading(false);

      if (response.success) {
        // Optionally show a success message or toast
        console.log("User role updated successfully");
      } else {
        // Optionally show an error message or toast
        console.error("Error updating user role:", response.message);
      }
    }
  };

  return loggedInUser.id.toString() === userId.toString() ||
    loggedInUser.role !== "admin" ? (
    <span className="font-semibold text-sm capitalize pl-1.5">{userRole}</span>
  ) : isLoading ? (
    <LoaderCircle className="animate-spin" />
  ) : (
    <select
      value={userRole}
      onChange={(e) => handleUpdateRole(e.target.value)}
      name="role"
      id="role"
      className="font-semibold text-sm cursor-pointer"
    >
      <option value="worker">Worker</option>
      <option value="manager">Manager</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default UserRoleToggle;
