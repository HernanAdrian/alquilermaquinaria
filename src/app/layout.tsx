import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileCTABar from '@/components/layout/MobileCTABar';
import NetlifyForms from '@/components/NetlifyForms';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Maqon — Alquiler de maquinaria de construcción en España',
    template: '%s | Maqon',
  },
  description: 'Alquila maquinaria de construcción en España. Miniexcavadoras, plataformas elevadoras, dumpers y más. Solicita presupuesto sin compromiso.',
  metadataBase: new URL('https://maqon.es'),
  openGraph: {
    siteName: 'Maqon',
    locale: 'es_ES',
    type: 'website',
  },
  verification: {
    google: 'Am7a8RR2jbaosofHqxHz_LfeyC-91QDxSAKjAoN6E2Q',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-neutral-50 text-neutral-900 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <NetlifyForms />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
