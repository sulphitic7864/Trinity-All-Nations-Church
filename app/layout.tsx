import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity All Nations Church - Memphis",
  description: "A place where faith, hope, and love come together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}