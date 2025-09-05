import { signIn, signOut } from "@/auth/auth";
import getCachedSession from "@/auth/lib/getCachedSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getCachedSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <>
      <h1>Welcome home!</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </>
  );
}
