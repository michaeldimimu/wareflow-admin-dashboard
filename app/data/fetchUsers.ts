import getCachedSession from "@/auth/lib/getCachedSession";
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model";

export default async function fetchUsers(filter: string = "all") {
  const session = await getCachedSession();

  if (!session?.user) {
    return { success: false, message: "Unauthorized" };
  }

  await connectToDB();

  try {
    const users =
      filter === "all"
        ? await User.find({})
        : await User.find({ role: filter });
    return {
      success: true,
      message: "Fetched users successfully",
      data: users,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch users. Please try again.",
    };
  }
}
