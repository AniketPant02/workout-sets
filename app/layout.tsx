import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login Supabase Template",
  description: "Prepared by Aniket Pant for Supabase-based projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
