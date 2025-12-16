'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import './logo.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Strona Główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  // Blokuj scroll gdy menu jest otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Logo variant="compact" link={true} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium text-white relative no-underline transition-all duration-300 hover:after:w-full ${
                    pathname === link.href ? 'after:w-full' : 'after:w-0'
                  } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300`}
                  style={{ color: 'white' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-transparent border-0 cursor-pointer p-0 z-[60] relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              style={{ marginRight: '1rem' }}
            >
              <span
                className={`absolute w-6 h-0.5 bg-white rounded-sm transition-all duration-500 ease-in-out origin-center ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-0'
                    : 'rotate-0 -translate-y-2'
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out origin-center ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white rounded-sm transition-all duration-500 ease-in-out origin-center ${
                  isMobileMenuOpen
                    ? '-rotate-45 translate-y-0'
                    : 'rotate-0 translate-y-2'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden bg-black/50 transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sidebar from right */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 z-[60] md:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Main Menu Section - Black background */}
        <div className="h-full bg-black relative flex">
          <div className="flex-1 h-full flex flex-col">
            {/* Close Button - Top Right */}
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity z-10"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links - Centered, filling entire sidebar */}
            <nav className="flex-1 flex flex-col justify-evenly items-center px-6 gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-center text-2xl text-white no-underline py-2 transition-all duration-300 font-normal w-full relative ${
                      isActive
                        ? 'font-semibold'
                        : 'hover:opacity-80'
                    } ${
                      isMobileMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-12'
                    }`}
                    style={{
                      color: 'white',
                      transitionDelay: isMobileMenuOpen
                        ? `${200 + index * 100}ms`
                        : '0ms',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

