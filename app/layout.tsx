import type { Metadata } from "next";
import { Sora, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thymus Energy FZCO",
  description: "A leading bulk petroleum trading company headquartered in DMCC, Dubai. Specializing in Fuel Oil, Gas Oil, VGO, Naphtha, and Bitumen across global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${nunito.variable} antialiased font-nunito bg-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
