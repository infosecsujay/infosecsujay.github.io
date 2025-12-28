'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Services', href: '/services' },
    { label: 'Claroty Expertise', href: '/claroty-expertise' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
  ];

  const secondaryNavItems = [
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
          <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-smooth">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-text-primary">CyberShield Pro</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-body text-text-primary hover:text-primary hover:bg-surface rounded-md transition-smooth font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-1 px-4 py-2 text-body text-text-primary hover:text-primary hover:bg-surface rounded-md transition-smooth font-medium"
              >
                <span>More</span>
                <Icon 
                  name={isMoreMenuOpen ? "ChevronUpIcon" : "ChevronDownIcon"} 
                  size={16} 
                  className="text-current"
                />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-lg py-1">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-body text-popover-foreground hover:bg-surface transition-smooth"
                      onClick={() => setIsMoreMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-cta text-cta-foreground rounded-md hover:shadow-cta transition-smooth font-semibold text-body"
            >
              Get Consultation
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-primary hover:bg-surface rounded-md transition-smooth"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="px-4 py-4 space-y-1">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-body text-text-primary hover:bg-surface rounded-md transition-smooth font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-body text-text-primary hover:bg-surface rounded-md transition-smooth font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-cta text-cta-foreground text-center rounded-md hover:shadow-cta transition-smooth font-semibold text-body"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;