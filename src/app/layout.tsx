import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Head from 'next/head'

import "../css/globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pineappletech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
