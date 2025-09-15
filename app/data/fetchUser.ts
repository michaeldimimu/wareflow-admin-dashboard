import getCachedSession from "@/auth/lib/getCachedSession";
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model";

export default async function fetchUser(userId: string) {
  const session = await getCachedSession();

  if (!session) {
    return { success: false, message: "Unauthorised!" };
  }

  await connectToDB();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, message: "User not found!" };
    }
    return { success: true, data: user };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch user. Please try again.",
    };
  }
}
