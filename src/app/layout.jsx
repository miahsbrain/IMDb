import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Nav */}
          <NavBar />
          {/* Search */}

          {children}
        </Providers>
      </body>
    </html>
  );
}