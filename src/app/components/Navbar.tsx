import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Natnael
        </Link>
        <div className="space-x-4">
          <Link href="/#projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}