import { signIn } from "@/auth/auth";
import getCachedSession from "@/auth/lib/getCachedSession";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const SignInPage = async () => {
  const session = await getCachedSession();
  if (session) {
    redirect("/");
  }

  return (
    <main className="grid min-h-[80vh] place-content-center text-center">
      <div className="bg-white border border-neutral-gray p-16 rounded-lg">
        <h1 className="flex items-center justify-center gap-4 text-3xl font-bold mb-4">
          <span>Sign in to</span>
          <Image src="/logo.svg" alt="Wareflow logo" height={150} width={150} />
        </h1>
        <p className="mb-8 max-w-[30ch] mx-auto">
          Access your account to continue managing with ease.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { callbackUrl: "/" });
          }}
        >
          <button
            type="submit"
            className="btn-secondary flex items-center justify-between gap-4 mx-auto px-4 py-2 pr-5"
          >
            <Image
              src="/google.svg"
              alt="Google logo"
              height={48}
              width={48}
              className="size-6"
            />
            <span>Proceed with Google</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignInPage;
