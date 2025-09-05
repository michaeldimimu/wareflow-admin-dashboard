import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/navbar";
import getCachedSession from "@/auth/lib/getCachedSession";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wareflow Admin Dashboard",
  description: "Admin dashboard for managing warehouse inventory workflows",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getCachedSession();

  return (
    <html lang="en">
      <body className={inter.variable}>
        {session?.user && <Navbar />}
        {children}
      </body>
    </html>
  );
}
