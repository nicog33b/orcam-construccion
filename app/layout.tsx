import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Constructora - Landing",
  description: "Landing page profesional para empresa de construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <div id="top" />
        <Header />
        <main className="page-content">{children}</main>
        <BackToTop />
        <Footer/>
      </body>
    </html>
  );
}
