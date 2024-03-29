import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Providers>
            {/* Header */}
            <Header />
            {/* Nav */}
            <NavBar />
            {/* Search */}
            <Search />

            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
