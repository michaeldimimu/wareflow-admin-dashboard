import { signOut } from "@/auth/auth";
import getCachedSession from "@/auth/lib/getCachedSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getCachedSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

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
