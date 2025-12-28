import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Integration {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  features: string[];
}

const integrations: Integration[] = [
{
  id: 1,
  name: "SIEM Platforms",
  category: "Security Operations",
  description: "Seamless integration with enterprise SIEM solutions for centralized security monitoring and incident correlation",
  logo: "/site_images/img_021.png",
  alt: "Dashboard showing SIEM integration with multiple security event streams and analytics",
  features: ["Real-time event forwarding", "Custom alert mapping", "Bi-directional communication"]
},
{
  id: 2,
  name: "Firewall Systems",
  category: "Network Security",
  description: "Direct integration with next-generation firewalls for automated policy enforcement and threat blocking",
  logo: "/site_images/img_005.png",
  alt: "Network firewall configuration interface with security rules and traffic monitoring",
  features: ["Automated rule creation", "Threat intelligence sharing", "Policy synchronization"]
},
{
  id: 3,
  name: "Asset Management",
  category: "IT Operations",
  description: "Integration with CMDB and asset management platforms for comprehensive inventory synchronization",
  logo: "/site_images/img_004.png",
  alt: "Asset management dashboard displaying inventory tracking and configuration details",
  features: ["Automated asset discovery", "Configuration tracking", "Lifecycle management"]
},
{
  id: 4,
  name: "Ticketing Systems",
  category: "Incident Management",
  description: "Automated ticket creation and workflow integration with ServiceNow, Jira, and other ITSM platforms",
  logo: "/site_images/img_002.png",
  alt: "Incident ticketing system showing automated workflow and priority assignments",
  features: ["Auto-ticket generation", "Priority mapping", "Status synchronization"]
},
{
  id: 5,
  name: "Threat Intelligence",
  category: "Security Intelligence",
  description: "Integration with leading threat intelligence feeds for proactive threat detection and response",
  logo: "/site_images/img_019.png",
  alt: "Threat intelligence dashboard with global threat map and risk indicators",
  features: ["IOC enrichment", "Threat correlation", "Automated blocking"]
},
{
  id: 6,
  name: "Cloud Platforms",
  category: "Cloud Security",
  description: "Native integration with AWS, Azure, and GCP for hybrid infrastructure visibility and control",
  logo: "/site_images/img_021.png",
  alt: "Cloud infrastructure dashboard showing multi-cloud security monitoring",
  features: ["Multi-cloud support", "API integration", "Unified visibility"]
}];


const IntegrationCapabilitiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal/10 px-4 py-2 rounded-full mb-6">
            <Icon name="PuzzlePieceIcon" size={20} className="text-teal" variant="solid" />
            <span className="text-teal text-sm font-semibold">Seamless Integration</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Integration Capabilities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Claroty seamlessly integrates with your existing security infrastructure, creating a unified defense ecosystem without disrupting operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) =>
          <div
            key={integration.id}
            className="bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden border border-border group">

              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                <AppImage
                src={integration.logo}
                alt={integration.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full">
                    {integration.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">{integration.name}</h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {integration.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {integration.features.map((feature, idx) =>
                  <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 bg-surface rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                Custom Integration Development
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Need integration with proprietary systems or specialized tools? I develop custom integration solutions tailored to your unique infrastructure requirements, ensuring seamless data flow and operational continuity.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <Icon name="CodeBracketIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Custom API development and integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CircleStackIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Legacy system connectivity solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="ArrowPathIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Real-time data synchronization</span>
                </li>
              </ul>
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-cta transition-smooth inline-flex items-center space-x-2">
                <span>Discuss Integration Needs</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <h4 className="text-xl font-bold text-text-primary mb-6">Integration Success Metrics</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-text-primary">Integration Success Rate</span>
                    <span className="text-2xl font-bold text-success">100%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-text-primary">Average Integration Time</span>
                    <span className="text-2xl font-bold text-primary">2-4 weeks</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-text-primary">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-success">98%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IntegrationCapabilitiesSection;