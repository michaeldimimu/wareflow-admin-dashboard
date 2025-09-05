import { signIn } from "@/auth/auth";
import React from "react";

const SignInPage = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default SignInPage;
