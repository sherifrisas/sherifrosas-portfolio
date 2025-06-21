import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Consultant Rosas | AI for Economic Policy",
  description: "Sherif Rosas - AI Consultant specializing in AI-driven economic policy. Helping organizations and governments leverage artificial intelligence for smarter, data-driven decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AI Consultant Rosas | AI for Economic Policy</title>
        <meta name="description" content="Sherif Rosas - AI Consultant specializing in AI-driven economic policy. Helping organizations and governments leverage artificial intelligence for smarter, data-driven decisions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} bg-gray-50 text-gray-900 antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}