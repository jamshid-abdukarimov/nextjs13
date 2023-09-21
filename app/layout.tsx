import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AJ Blog",
  description: "My personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
