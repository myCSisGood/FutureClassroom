import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "課程互動分析系統",
  description: "課程互動分析系統",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <div className="hidden min-[360px]:flex">
            <Sidebar />
          </div>

          <main className="flex-1 overflow-y-auto bg-[rgba(242,242,242,1)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
