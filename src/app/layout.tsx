import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar'

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
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}