import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import StructuredData from './components/StructuredData';

export const metadata: Metadata = {
  title: 'Natnael Darsema | Website Developer',
  description: 'Portfolio of Natnael darsema, a website developer',
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
      <body className="min-h-screen bg-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}