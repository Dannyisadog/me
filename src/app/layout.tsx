import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/layout/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dannyisadog",
  description: "Dann Chen's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
