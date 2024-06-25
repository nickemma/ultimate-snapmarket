import type { Metadata } from "next";
import { Inter } from "next/font/google";

// ==========
import Nav from "@/components/navigation/nav";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimate SnapMarket",
  description:
    "Discover the future of shopping with SnapMarket. Snap up the best deals and enjoy a market experience that's as easy as a snap and trading becomes a breeze. providing the ultimate convenience for all your shopping needs. Enjoy a user-friendly interface and a wide range of products at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("px-6 md:px-12 max-w-7xl mx-auto", `${inter.className}`)}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
