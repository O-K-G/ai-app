// import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import localFont from "next/font/local";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.variable}`}>{children}</body>
    </html>
  );
}
