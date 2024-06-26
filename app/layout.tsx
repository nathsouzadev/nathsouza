import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/modal-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nathally Souza',
  description: 'Software Engineer',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel='icon' href='/favicon.png' />
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </>
  );
}
