import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sherif Rosas | Freelance Data Scientist",
  description: "The professional portfolio for Sherif Rosas, a freelance data scientist specializing in machine learning, data analysis, and visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-50 text-gray-900 antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
