import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export default function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg hover:shadow-xl transition-all font-semibold text-lg hover:scale-105"
          >
            <span>{primaryCTA.text}</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
          
          <Link
            href={secondaryCTA.href}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
          >
            <span>{secondaryCTA.text}</span>
            <Icon name="PhoneIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}