import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    services: [
      { label: 'All Services', href: '/services' },
      { label: 'Claroty Expertise', href: '/claroty-expertise' },
      { label: 'Case Studies', href: '/case-studies' }
    ],
    company: [
      { label: 'About Sujay', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Homepage', href: '/homepage' }
    ]
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
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
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premier Claroty consultant delivering enterprise-grade OT/ICS security solutions with proven deployment excellence.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth">
                <Icon name="EnvelopeIcon" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth">
                <Icon name="PhoneIcon" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} CyberShield Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;