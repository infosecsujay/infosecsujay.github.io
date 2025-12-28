import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'OT Security Assessment', href: '/services' },
      { label: 'Claroty Implementation', href: '/claroty-expertise' },
      { label: 'Virtual CISO', href: '/services' },
      { label: 'Compliance Consulting', href: '/services' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
    social: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkIcon' },
      { label: 'Twitter', href: 'https://twitter.com', icon: 'LinkIcon' },
      { label: 'GitHub', href: 'https://github.com', icon: 'LinkIcon' },
    ],
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold">CyberShield Pro</span>
            </div>
            <p className="text-white/70 text-sm">
              Enterprise-grade cybersecurity expertise for industrial and operational technology environments.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={link.label}
                >
                  <Icon name={link.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} CyberShield Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}