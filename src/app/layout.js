import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from './../components/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>ReactNodeSend</title>
      </Head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-100 min-h-screen`}
      >
        <div className="container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
