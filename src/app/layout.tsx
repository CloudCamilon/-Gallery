import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gallery+",
  description: "A prouduct of B+ Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable}  ${urbanist.variable} font-sans urbanist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
