import type { Metadata } from "next";
import {Montserrat} from 'next/font/google'
import "./globals.css";

const font = Montserrat({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "Create by KennedyFerreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
