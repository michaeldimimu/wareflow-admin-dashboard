"use server";

import getCachedSession from "@/auth/lib/getCachedSession";
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model";
import { revalidatePath } from "next/cache";

export default async function deleteUser(userId: string) {
  const session = await getCachedSession();

  if (!session?.user) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    await connectToDB();

    const user = await User.deleteOne({ _id: userId });

    if (!user) {
      return { success: false, message: "User not found" };
    }

    revalidatePath("/users");

    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    console.log("Error deleting user:", error);
    return {
      success: false,
      message: "Failed to delete user. Please try again.",
    };
  }
}
