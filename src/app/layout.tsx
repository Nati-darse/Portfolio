import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import StructuredData from './components/StructuredData';

export const metadata: Metadata = {
  title: 'Natnael Darsema | Frontend Developer',
  description: 'Portfolio built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}