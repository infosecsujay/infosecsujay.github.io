import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ContactFooterProps {
  className?: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ className = '' }) => {
  const officeLocations = [
    {
      city: 'Mumbai',
      country: 'India',
      address: '123 Cyber Security Plaza, Bandra Kurla Complex',
      timezone: 'IST (UTC+5:30)'
    },
    {
      city: 'Virtual Office',
      country: 'Global',
      address: 'Serving clients worldwide with remote consultation',
      timezone: 'Multi-timezone support'
    }
  ];

  const quickLinks = [
    { label: 'Services Overview', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About Sujay', href: '/about' },
    { label: 'Claroty Expertise', href: '/claroty-expertise' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'Twitter', icon: 'LinkIcon', href: '#' },
    { name: 'GitHub', icon: 'LinkIcon', href: '#' }
  ];

  return (
    <footer className={`bg-surface border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Office Locations</h3>
            <div className="space-y-4">
              {officeLocations.map((location, index) => (
                <div key={index} className="space-y-1">
                  <p className="font-medium text-text-primary">{location.city}, {location.country}</p>
                  <p className="text-sm text-text-secondary">{location.address}</p>
                  <p className="text-xs text-text-secondary flex items-center gap-1">
                    <Icon name="ClockIcon" size={14} />
                    {location.timezone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Emergency Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-error flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">24/7 Security Incidents</p>
                  <p className="text-sm text-text-secondary">+91 98765 00000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} CyberShield Pro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-text-secondary">
              <Link href="#" className="hover:text-primary transition-smooth">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-smooth">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-smooth">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;