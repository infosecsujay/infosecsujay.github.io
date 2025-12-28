import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from '@/app/homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - CyberShield Pro',
  description: 'Enterprise-grade OT/IT cybersecurity solutions from India\'s premier Claroty expert. Transform your industrial security posture with world-class expertise in NIST, IEC 62443, and comprehensive security assessments.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}