import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'OT Security Assessment', href: '/services#ot-security' },
      { label: 'Claroty Implementation', href: '/services#claroty' },
      { label: 'NIST Framework', href: '/services#nist' },
      { label: 'Virtual CISO', href: '/services#vciso' }
    ],
    company: [
      { label: 'About Sujay', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Claroty Expertise', href: '/claroty-expertise' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Whitepapers', href: '/resources#whitepapers' },
      { label: 'Industry Insights', href: '/resources#insights' },
      { label: 'Security Tools', href: '/resources#tools' },
      { label: 'Compliance Guides', href: '/resources#compliance' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'AtSymbolIcon', href: 'https://twitter.com' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com' }
  ];

  return (
    <footer className={`bg-navy text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/homepage" className="flex items-center space-x-3">
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
              <span className="text-xl font-bold">CyberShield Pro</span>
            </Link>
            <p className="text-white/80 max-w-md">
              Enterprise-grade OT/IT cybersecurity solutions from India's premier Claroty expert. Transforming industrial security with clarity, speed, and unmatched expertise.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} CyberShield Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-smooth">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-smooth">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-smooth">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;