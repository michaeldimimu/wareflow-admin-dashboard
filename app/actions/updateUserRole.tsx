"use server";

import getCachedSession from "@/auth/lib/getCachedSession";
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model";
import { revalidatePath } from "next/cache";

export default async function updateUserRole(userId: string, newRole: string) {
  const session = await getCachedSession();

  if (!session?.user) {
    return { success: false, message: "Unauthorized" };
  }

  await connectToDB();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    user.role = newRole;
    await user.save();
    revalidatePath("/users");
    return {
      success: true,
      message: "User role updated successfully",
    };
  } catch (error) {
    console.log("Error updating user role:", error);
    return {
      success: false,
      message: "Failed to update user role. Please try again.",
    };
  }
}
