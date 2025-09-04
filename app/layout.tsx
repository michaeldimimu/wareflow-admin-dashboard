import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wareflow Admin Dashboard",
  description: "Admin dashboard for managing warehouse inventory workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
