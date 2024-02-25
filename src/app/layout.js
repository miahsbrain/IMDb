import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        {/* Nav */}

        {/* Search */}

        {children}
      </body>
    </html>
  );
}
