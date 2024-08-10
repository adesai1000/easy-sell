import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Sell",
  description: "Full Stack Marketplace Web Application made using Next.js, Tailwind, TypeScript, Supabase, Auth.js, Redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> 
        <div className="bg-gray-951 py-12">{children}</div>
        <Footer />
        </body>
    </html>
  );
}