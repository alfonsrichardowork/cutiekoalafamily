import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Geist, Roboto } from 'next/font/google'
 
const roboto = Roboto({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Our Cutie Koala Family Website",
  description: "All of Our Beautiful Memories in 1 Place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body
      > 
        {children}
      </body>
    </html>
  );
}
