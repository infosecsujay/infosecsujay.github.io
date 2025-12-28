import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  badge: string;
  alt: string;
  verified: boolean;
}

const certifications: Certification[] = [
{
  id: 1,
  name: "Claroty Certified Professional",
  issuer: "Claroty Ltd.",
  year: "2023",
  badge: "/site_images/img_023.png",
  alt: "Professional certification badge with blue and gold emblem showing security shield icon",
  verified: true
},
{
  id: 2,
  name: "Advanced Claroty Deployment Specialist",
  issuer: "Claroty Ltd.",
  year: "2024",
  badge: "/site_images/img_041.png",
  alt: "Advanced certification badge with platinum finish and network security symbols",
  verified: true
},
{
  id: 3,
  name: "Claroty Architecture Expert",
  issuer: "Claroty Ltd.",
  year: "2024",
  badge: "/site_images/img_023.png",
  alt: "Expert level certification badge with gold border and industrial security icons",
  verified: true
}];


const CertificationSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-primary text-sm font-semibold">Verified Credentials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Claroty Certifications & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Industry-recognized credentials validating deep technical mastery and proven deployment excellence in Claroty platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) =>
          <div key={cert.id} className="bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden border border-border">
              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <AppImage
                  src={cert.badge}
                  alt={cert.alt}
                  className="w-full h-full object-cover" />

                </div>
                {cert.verified &&
              <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Icon name="CheckBadgeIcon" size={16} variant="solid" />
                    <span>Verified</span>
                  </div>
              }
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{cert.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-text-secondary">Issued: {cert.year}</span>
                  <button className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center space-x-1">
                    <span>Verify</span>
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning & Advanced Training
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Staying ahead of emerging threats through ongoing Claroty platform updates, advanced security research, and direct collaboration with Claroty engineering teams
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-xl transition-smooth">
            View All Credentials
          </button>
        </div>
      </div>
    </section>);

};

export default CertificationSection;