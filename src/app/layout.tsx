import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Immigration Bot Demo App",
  description:
    "A web app with a chatbot and a FAQ integrating into the chatbot",
};

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
