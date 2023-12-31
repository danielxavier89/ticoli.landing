import { Footer, Navbar } from "@/components/common";
import { IChildren } from "@/interface";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticoli",
  description: "Generated by Baitul Hikmah Team",
};

const RootLayout = ({ children }: IChildren) => (
  <html lang="en">
    <body>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
