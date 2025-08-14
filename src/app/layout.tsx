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
  metadataBase: new URL("https://www.delcaconstrucoes.com.br"),

  title: "DELCA Construções | Materiais de Construção em Parnamirim, RN",
  description:
    "Encontre tudo para sua obra na DELCA Construções. Mais de 15 anos de experiência em Parnamirim, RN, com entrega rápida e os melhores preços em cimento, tijolos, tintas e mais.",
  keywords:
    "materiais de construção, parnamirim, delca, Delca, DELCA, cimento, tijolo, areia, loja de construção, rn, material, material de construção",

  openGraph: {
    title: "DELCA Construções | Qualidade e Confiança para sua Obra",
    description:
      "A sua parceira completa em materiais de construção em Parnamirim, RN.",
    url: "https://www.delcaconstrucoes.com.br/",
    siteName: "DELCA Construções",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DELCA Construções | Qualidade e Confiança para sua Obra",
    description:
      "A sua parceira completa em materiais de construção em Parnamirim, RN.",
    images: ["/opengraph.jpeg"],
  },
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
