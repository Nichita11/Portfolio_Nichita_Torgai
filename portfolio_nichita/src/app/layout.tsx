import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/layouts/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
