import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logoIngresseColor from "@/src/_next/static/media/logo-ingresse-colorful.c63e2f05.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compra Embarcada Ingresse",
  description: "SÓ TRACK BOA BELO HORIZONTE 2024",
  icons: {
    icon: logoIngresseColor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
