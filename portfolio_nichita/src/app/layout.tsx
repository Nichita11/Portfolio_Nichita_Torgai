import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/layouts/Navbar";
import { createContext, useReducer, useState } from "react";
import ThemeContextWrapper from "@/components/contextWrappers/ThemeContextWrapper";
import { Inter } from "next/font/google";
import Footer from "@/components/layouts/Footer";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nichita Torgai",
  description: "Portofolio Developer Nichita Torgai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <ThemeContextWrapper>{children}</ThemeContextWrapper>
        <Footer/>
      </body>
    </html>
  );
}
