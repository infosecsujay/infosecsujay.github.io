import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInteractive from './components/ContactInteractive';
import ContactFooter from './components/ContactFooter';

export const metadata: Metadata = {
  title: 'Contact - CyberShield Pro',
  description: 'Connect with India\'s premier cybersecurity expert Sujay Shinde. Multiple engagement pathways from quick consultations to enterprise contracts. 24-48 hour response time with multi-timezone support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactInteractive />
        <ContactFooter />
      </main>
    </div>
  );
}