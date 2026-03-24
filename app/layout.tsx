import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Boto Premium | Harmonização Facial & Estética',
  description: 'Referência em estética de alta performance em São Paulo. Realçamos sua beleza natural com segurança e tecnologia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans text-brand-dark bg-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
