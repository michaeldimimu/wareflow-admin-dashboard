import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "./lib/db";
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [Google({ allowDangerousEmailAccountLinking: true })],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          await connectToDB();

          // Check if user already exists
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            // Create new user with default role
            await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
              role: "worker", // Default role for new users
            });
          }

          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      // If this is the first time the token is created (user object is available)
      if (user) {
        try {
          await connectToDB();
          const dbUser = await User.findOne({ email: user.email });
          if (dbUser) {
            token.role = dbUser.role;
            token.id = dbUser._id.toString();
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }

      return token;
    },

    async session({ session, token }) {
      // Add role and id to the session
      if (token) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
