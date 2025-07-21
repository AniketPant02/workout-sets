import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workout App",
  description: "A simple workout app to push your fitness limits",
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
