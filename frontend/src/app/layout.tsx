import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/organisms/Header";
import Navbar from "@/components/organisms/Navbar";
import ReduxProvider from "@/features/ReduxProvider";
import "./globals.css";

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
  title: "Catium",
  description: "Pet animels social media website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}
      >
        <ReduxProvider>
          <Header />
          <div className="container mx-auto">
            <Navbar>{children}</Navbar>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
