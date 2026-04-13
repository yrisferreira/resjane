import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Jane Recursos Pedagógicos',
    template: '%s | Jane Recursos Pedagógicos'
  },
  description: 'Recursos pedagógicos criados por Jane Ferreira, Pedagoga especialista em Educação Especial, Inclusiva e Psicopedagogia. Transforme sua sala de aula com materiais educacionais de qualidade.',
  keywords: ['recursos pedagógicos', 'educação especial', 'psicopedagogia', 'materiais educacionais', 'jane ferreira'],
  authors: [{ name: 'Jane Ferreira' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://janerecursos.com',
    siteName: 'Jane Recursos Pedagógicos',
    title: 'Jane Recursos Pedagógicos',
    description: 'Recursos pedagógicos criados por Jane Ferreira, Pedagoga especialista em Educação Especial, Inclusiva e Psicopedagogia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Recursos Pedagógicos',
    description: 'Recursos pedagógicos criados por Jane Ferreira, Pedagoga especialista em Educação Especial, Inclusiva e Psicopedagogia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 animate-fade-in">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
