"use client";

import updateUserRole from "@/app/actions/updateUserRole";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const UserRoleToggle = ({
  userId,
  currentRole,
}: {
  userId: string;
  currentRole: string;
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

  return isLoading ? (
    <LoaderCircle className="animate-spin" />
  ) : (
    <select
      value={currentRole}
      onChange={(e) => handleUpdateRole(e.target.value)}
      name="role"
      id="role"
      className="font-semibold text-sm"
    >
      <option value="worker">Worker</option>
      <option value="manager">Manager</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default UserRoleToggle;
