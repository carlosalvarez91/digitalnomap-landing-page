import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © {currentYear} DigitalNoMap. All rights reserved.
        </div>
        <nav className="flex space-x-4">
          <Link 
            href="/support" 
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            Support
          </Link>
          <Link
            href="/privacy" 
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms" 
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}