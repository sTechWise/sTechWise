import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoModalProvider } from "@/context/DemoModalContext";
import { DemoModal } from "@/components/DemoModal";

export const metadata: Metadata = {
  title: "sTechWise | AI & Automation Platform",
  description: "The automation engine for the modern enterprise. Orchestrate complex workflows visually.",
};

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className={`font-sans bg-brand-bg text-brand-primary antialiased`}>
        <DemoModalProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}
