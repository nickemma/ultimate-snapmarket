import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
// ==========
import Nav from "@/components/navigation/nav";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Toaster from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-grow px-6 md:px-12 mx-auto max-w-8xl">
            <Nav />
            <Toaster />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
