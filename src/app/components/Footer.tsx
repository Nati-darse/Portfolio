'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Natnael.dev
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Full-Stack Developer passionate about creating innovative web solutions 
              that solve real-world problems and delight users.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Nati-darse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/nathnael-darsema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://twitter.com/nati_sha29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="https://instagram.com/n.a.t.i_sha_229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:your-email@example.com" className="hover:text-white transition-colors duration-300">
                  your-email@example.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Ethiopia
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕒</span>
                UTC +03:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Natnael Darsema. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 