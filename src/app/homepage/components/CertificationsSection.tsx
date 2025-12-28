import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon: string;
  color: string;
}

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection = ({ className = '' }: CertificationsSectionProps) => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: 'NIST Cybersecurity Framework',
      issuer: 'National Institute of Standards',
      icon: 'ShieldCheckIcon',
      color: 'from-primary to-navy'
    },
    {
      id: 2,
      name: 'IEC 62443 Certified',
      issuer: 'International Electrotechnical Commission',
      icon: 'CheckBadgeIcon',
      color: 'from-secondary to-teal'
    },
    {
      id: 3,
      name: 'Claroty Platform Expert',
      issuer: 'Claroty Inc.',
      icon: 'CpuChipIcon',
      color: 'from-accent to-coral'
    },
    {
      id: 4,
      name: 'CISSP Certified',
      issuer: 'ISC² Security Professional',
      icon: 'AcademicCapIcon',
      color: 'from-success to-trust'
    },
    {
      id: 5,
      name: 'CISM Certified',
      issuer: 'ISACA Information Security',
      icon: 'DocumentCheckIcon',
      color: 'from-warning to-brand-secondary'
    },
    {
      id: 6,
      name: 'ISO 27001 Lead Auditor',
      issuer: 'International Standards Organization',
      icon: 'ClipboardDocumentCheckIcon',
      color: 'from-destructive to-error'
    }
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Industry-Leading Certifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Backed by globally recognized credentials and continuous professional development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-smooth border border-border group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                <Icon name={cert.icon as any} size={32} className="text-white" variant="solid" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{cert.name}</h3>
              <p className="text-sm text-text-secondary">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-surface rounded-xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Icon name="TrophyIcon" size={32} className="text-white" variant="solid" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">15+ Years of Excellence</h3>
                <p className="text-text-secondary">Continuous learning and industry leadership</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Training Hours/Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;