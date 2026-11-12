import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import AssessmentPopup from "@/components/layout/AssessmentPopup";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pelican Migration Consultants | Trusted Immigration Consultants in Dubai",
  description:
    "Pelican Migration Consultants helps you migrate to Canada, Australia, New Zealand and Portugal with personalized guidance, a transparent process and professional support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <AssessmentPopup />
      </body>
    </html>
  );
}
