import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { satoshi } from './fonts';
import { ThemeProvider } from "@/components/themes/theme-provider";
import Cursor from "../components/cursor/Cursor";
import JunoChatWidget from "@/Juno/JunoChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dev.jeet",
  description: "Jeet's portfolio showcasing AI, Web, and Hackathon projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} antialiased dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JunoChatWidget />
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
