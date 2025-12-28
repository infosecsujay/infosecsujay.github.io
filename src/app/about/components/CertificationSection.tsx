import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
  imageAlt: string;
  verified: boolean;
}

interface CertificationSectionProps {
  title: string;
  subtitle: string;
  certifications: Certification[];
}

export default function CertificationSection({ title, subtitle, certifications }: CertificationSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                <AppImage
                  src={cert.image}
                  alt={cert.imageAlt}
                  className="w-full h-full object-contain p-4"
                />
                {cert.verified && (
                  <div className="absolute top-2 right-2 bg-success text-white rounded-full p-2">
                    <Icon name="CheckBadgeIcon" size={20} variant="solid" />
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-2">{cert.name}</h3>
              <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
              <p className="text-primary text-sm font-semibold">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}