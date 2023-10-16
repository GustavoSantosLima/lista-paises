import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Site que lista todos os países do mundo"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main className="min-h-screen bg-gray-100 flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Link href="/">
                <Image src="/logo.svg" width={48} height={48} alt="Logo" />
              </Link>
              <h1 className="font-bold text-xl">Lista de Países</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
