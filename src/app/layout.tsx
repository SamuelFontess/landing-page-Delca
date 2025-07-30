import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/WhatsAppButton";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Delca construções",
  description: "Sua parceira de confiança em materiais de construção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
