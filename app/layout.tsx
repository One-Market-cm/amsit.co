import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "AMUNIR Trading | Solutions logistiques Chine-Afrique",
  description: "AMS International Group - Expert en logistique et transit entre la Chine et l'Afrique. Sourcing, dédouanement, transport express et standard.",
  keywords: "logistique Chine Afrique, transit international, sourcing Chine, dédouanement Gabon, AMUNIR Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
