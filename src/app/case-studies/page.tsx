import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CaseStudiesInteractive from './components/CaseStudiesInteractive';
import MetricsDashboard from './components/MetricsDashboard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies - CyberShield Pro',
  description: 'Explore real-world cybersecurity transformation stories with measurable results. See how we helped enterprises achieve 87-96% risk reduction, 100% compliance, and millions in cost savings through strategic OT security implementations.',
};

export default function CaseStudiesPage() {
  const aggregateMetrics = [
    {
      label: "Average Risk Reduction",
      value: "91%",
      icon: "ShieldCheckIcon",
      trend: "↓ 91% safer"
    },
    {
      label: "Total Assets Protected",
      value: "10,000+",
      icon: "ServerIcon",
      trend: "↑ Growing"
    },
    {
      label: "Compliance Rate",
      value: "100%",
      icon: "CheckBadgeIcon",
      trend: "✓ Perfect"
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: "StarIcon",
      trend: "↑ Excellent"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16 bg-background">
        <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="DocumentTextIcon" size={24} className="text-white/80" />
                <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                  Portfolio Showcase
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Real-World Security Transformations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explore detailed case studies demonstrating measurable impact, quantifiable ROI, and enterprise-grade security improvements across critical infrastructure sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-primary rounded-md hover:shadow-xl transition-smooth font-semibold flex items-center"
                >
                  <Icon name="ChatBubbleLeftEllipsisIcon" size={20} className="mr-2" />
                  Discuss Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md hover:bg-white/20 transition-smooth font-semibold flex items-center"
                >
                  <Icon name="LaunchIcon" size={20} className="mr-2" />
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MetricsDashboard metrics={aggregateMetrics} />
            <CaseStudiesInteractive />
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="LightBulbIcon" size={48} className="text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Join leading enterprises who have achieved measurable security improvements and regulatory compliance with our proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cta text-cta-foreground rounded-md hover:shadow-cta transition-smooth font-semibold text-lg flex items-center justify-center"
              >
                <Icon name="CalendarIcon" size={20} className="mr-2" />
                Schedule Consultation
              </Link>
              <Link
                href="/claroty-expertise"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-md hover:shadow-md transition-smooth font-semibold text-lg flex items-center justify-center"
              >
                <Icon name="AcademicCapIcon" size={20} className="mr-2" />
                Claroty Expertise
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">CyberShield Pro</h3>
                <p className="text-white/80 text-sm">
                  Enterprise-grade OT security expertise with proven results across critical infrastructure sectors.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><Link href="/services" className="hover:text-white transition-smooth">All Services</Link></li>
                  <li><Link href="/claroty-expertise" className="hover:text-white transition-smooth">Claroty Expertise</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><Link href="/about" className="hover:text-white transition-smooth">About</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-smooth">Case Studies</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><Link href="/contact" className="hover:text-white transition-smooth">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
              <p>&copy; {new Date().getFullYear()} CyberShield Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}