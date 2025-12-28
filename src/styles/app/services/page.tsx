import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - CyberShield Pro',
  description: 'Comprehensive cybersecurity services catalog featuring 38 specialized OT/IT security solutions, from strategic consulting to hands-on implementation, tailored for enterprise security transformation.',
};

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  badges: string[];
  pricing?: string;
  deliveryTime?: string;
  industry: string;
  serviceType: string;
  urgency: string;
}

const mockServices: Service[] = [
  {
    id: 's1',
    title: 'OT Security Assessment & Gap Analysis',
    description: 'Comprehensive evaluation of your operational technology environment against NIST CSF, IEC 62443, and industry best practices to identify vulnerabilities and compliance gaps.',
    features: [
      'Complete asset inventory and network mapping',
      'Vulnerability assessment across OT infrastructure',
      'Compliance gap analysis (NIST, IEC 62443, NERC CIP)',
      'Risk prioritization matrix with remediation roadmap',
      'Executive summary with actionable recommendations'
    ],
    category: 'Strategic Consulting',
    badges: ['NIST', 'IEC 62443'],
    pricing: 'Custom Quote',
    deliveryTime: '4-6 weeks',
    industry: 'Manufacturing',
    serviceType: 'Assessment',
    urgency: 'Standard'
  },
  {
    id: 's2',
    title: 'Claroty Platform Implementation',
    description: 'End-to-end deployment of Claroty xDome platform for complete OT visibility, threat detection, and vulnerability management across industrial environments.',
    features: [
      'Architecture design and sizing recommendations',
      'Full platform deployment and configuration',
      'Integration with existing security tools (SIEM, SOAR)',
      'Custom use case development and tuning',
      'Knowledge transfer and administrator training'
    ],
    category: 'Implementation Services',
    badges: ['Claroty', 'Expert'],
    pricing: 'Starting at $25,000',
    deliveryTime: '6-8 weeks',
    industry: 'Energy',
    serviceType: 'Implementation',
    urgency: 'High'
  },
  {
    id: 's3',
    title: 'Virtual CISO (vCISO) Services',
    description: 'Fractional CISO leadership providing strategic security guidance, program development, and executive-level oversight without full-time commitment.',
    features: [
      'Monthly strategic security planning sessions',
      'Security program development and maturity assessment',
      'Board-level reporting and risk communication',
      'Vendor evaluation and technology roadmap guidance',
      'Incident response planning and tabletop exercises'
    ],
    category: 'Advisory Services',
    badges: ['Leadership', 'Strategic'],
    pricing: '$8,000/month',
    deliveryTime: 'Ongoing',
    industry: 'All',
    serviceType: 'Advisory',
    urgency: 'Standard'
  },
  {
    id: 's4',
    title: 'IEC 62443 Compliance Program',
    description: 'Complete compliance framework implementation for industrial automation and control systems following IEC 62443 standards and certification requirements.',
    features: [
      'Gap assessment against IEC 62443-2-1 and 62443-3-3',
      'Security policy and procedure development',
      'Zone and conduit architecture design',
      'Security level target (SL-T) determination',
      'Pre-certification readiness assessment'
    ],
    category: 'Compliance Services',
    badges: ['IEC 62443', 'Certification'],
    pricing: 'Custom Quote',
    deliveryTime: '8-12 weeks',
    industry: 'Manufacturing',
    serviceType: 'Compliance',
    urgency: 'High'
  },
  {
    id: 's5',
    title: 'OT Network Segmentation Design',
    description: 'Strategic network architecture redesign implementing defense-in-depth principles with proper segmentation between IT/OT environments and critical asset isolation.',
    features: [
      'Current network topology analysis and documentation',
      'Zone and conduit design per IEC 62443',
      'Firewall rule optimization and policy development',
      'DMZ architecture for secure IT/OT integration',
      'Implementation roadmap with phased approach'
    ],
    category: 'Architecture Services',
    badges: ['Network Security', 'Design'],
    pricing: 'Starting at $15,000',
    deliveryTime: '4-6 weeks',
    industry: 'Critical Infrastructure',
    serviceType: 'Design',
    urgency: 'Standard'
  },
  {
    id: 's6',
    title: 'Incident Response Planning & Tabletop',
    description: 'Development of comprehensive OT-specific incident response plans with realistic tabletop exercises to test organizational readiness and response capabilities.',
    features: [
      'OT-specific incident response plan development',
      'Playbook creation for common OT attack scenarios',
      'Tabletop exercise facilitation with key stakeholders',
      'Communication plan and escalation procedures',
      'Post-exercise gap analysis and improvement plan'
    ],
    category: 'Operational Services',
    badges: ['IR Planning', 'Training'],
    pricing: '$12,000',
    deliveryTime: '3-4 weeks',
    industry: 'All',
    serviceType: 'Planning',
    urgency: 'High'
  },
  {
    id: 's7',
    title: 'Security Awareness Training for OT Personnel',
    description: 'Customized security awareness program designed specifically for operational technology environments, addressing unique risks and operational constraints.',
    features: [
      'Role-based training modules for operators and engineers',
      'OT-specific threat landscape education',
      'Phishing simulation campaigns tailored to OT context',
      'Secure remote access and vendor management training',
      'Quarterly refresher sessions and metrics reporting'
    ],
    category: 'Training Services',
    badges: ['Education', 'Awareness'],
    pricing: '$5,000 per session',
    deliveryTime: '2-3 weeks',
    industry: 'All',
    serviceType: 'Training',
    urgency: 'Standard'
  },
  {
    id: 's8',
    title: 'Vulnerability Management Program Setup',
    description: 'Establishment of continuous vulnerability management program specifically designed for OT environments with safe scanning methodologies and patch management strategies.',
    features: [
      'Passive and active vulnerability scanning tool selection',
      'Safe scanning methodology development',
      'Vulnerability prioritization framework',
      'Compensating controls strategy for unpatchable systems',
      'Integration with change management processes'
    ],
    category: 'Operational Services',
    badges: ['Vulnerability Management', 'Continuous'],
    pricing: 'Starting at $18,000',
    deliveryTime: '5-7 weeks',
    industry: 'Manufacturing',
    serviceType: 'Program Setup',
    urgency: 'Standard'
  },
  {
    id: 's9',
    title: 'Supply Chain Security Assessment',
    description: 'Comprehensive evaluation of third-party vendor security practices and supply chain risks specific to OT components and industrial control systems.',
    features: [
      'Vendor security questionnaire development',
      'Third-party risk assessment methodology',
      'Software bill of materials (SBOM) analysis',
      'Vendor security scorecard implementation',
      'Ongoing monitoring and reassessment framework'
    ],
    category: 'Risk Management',
    badges: ['Supply Chain', 'Third-Party Risk'],
    pricing: 'Custom Quote',
    deliveryTime: '4-6 weeks',
    industry: 'All',
    serviceType: 'Assessment',
    urgency: 'Standard'
  },
  {
    id: 's10',
    title: 'Cloud Security for Industrial IoT',
    description: 'Secure cloud architecture design and implementation for Industrial IoT deployments, ensuring data integrity and operational continuity.',
    features: [
      'Cloud security architecture design (AWS, Azure, GCP)',
      'Secure data pipeline implementation',
      'Identity and access management for IIoT devices',
      'Encryption strategy for data in transit and at rest',
      'Compliance mapping (SOC 2, ISO 27001)'
    ],
    category: 'Cloud Services',
    badges: ['IIoT', 'Cloud Security'],
    pricing: 'Starting at $20,000',
    deliveryTime: '6-8 weeks',
    industry: 'Manufacturing',
    serviceType: 'Implementation',
    urgency: 'High'
  },
  {
    id: 's11',
    title: 'Penetration Testing for OT Environments',
    description: 'Controlled security testing of operational technology systems using safe methodologies that respect operational constraints and safety requirements.',
    features: [
      'Pre-engagement safety analysis and approval process',
      'Network and application layer testing',
      'Social engineering assessments for OT personnel',
      'Physical security evaluation of control rooms',
      'Detailed findings report with remediation guidance'
    ],
    category: 'Testing Services',
    badges: ['Penetration Testing', 'Red Team'],
    pricing: 'Starting at $22,000',
    deliveryTime: '3-5 weeks',
    industry: 'Critical Infrastructure',
    serviceType: 'Testing',
    urgency: 'High'
  },
  {
    id: 's12',
    title: 'Security Operations Center (SOC) Design',
    description: 'Design and implementation roadmap for OT-aware Security Operations Center with appropriate tools, processes, and staffing models.',
    features: [
      'SOC maturity assessment and gap analysis',
      'Use case development for OT threat detection',
      'SIEM integration and log source identification',
      'Playbook development for OT incident response',
      'Staffing model and training recommendations'
    ],
    category: 'Operational Services',
    badges: ['SOC', 'Operations'],
    pricing: 'Custom Quote',
    deliveryTime: '8-10 weeks',
    industry: 'All',
    serviceType: 'Design',
    urgency: 'Standard'
  }
];

const categories = [
  'Strategic Consulting',
  'Implementation Services',
  'Advisory Services',
  'Compliance Services',
  'Architecture Services',
  'Operational Services',
  'Training Services',
  'Risk Management',
  'Cloud Services',
  'Testing Services'
];

const industries = [
  { label: 'All Industries', value: 'All' },
  { label: 'Manufacturing', value: 'Manufacturing' },
  { label: 'Energy & Utilities', value: 'Energy' },
  { label: 'Critical Infrastructure', value: 'Critical Infrastructure' },
  { label: 'Oil & Gas', value: 'Oil & Gas' },
  { label: 'Water & Wastewater', value: 'Water' }
];

const serviceTypes = [
  { label: 'All Types', value: 'All' },
  { label: 'Assessment', value: 'Assessment' },
  { label: 'Implementation', value: 'Implementation' },
  { label: 'Advisory', value: 'Advisory' },
  { label: 'Compliance', value: 'Compliance' },
  { label: 'Design', value: 'Design' },
  { label: 'Training', value: 'Training' },
  { label: 'Testing', value: 'Testing' }
];

const urgencyLevels = [
  { label: 'All Levels', value: 'All' },
  { label: 'Standard (4-8 weeks)', value: 'Standard' },
  { label: 'High Priority (2-4 weeks)', value: 'High' },
  { label: 'Critical (1-2 weeks)', value: 'Critical' }
];

const builderSteps = [
  {
    id: 'step1',
    title: 'What is your primary security concern?',
    options: [
      'Compliance & Regulatory Requirements',
      'Threat Detection & Response',
      'Network Security & Segmentation',
      'Vendor & Supply Chain Risk'
    ]
  },
  {
    id: 'step2',
    title: 'What is your organization size?',
    options: [
      'Small (1-100 employees)',
      'Medium (101-1000 employees)',
      'Large (1001-5000 employees)',
      'Enterprise (5000+ employees)'
    ]
  },
  {
    id: 'step3',
    title: 'What is your timeline?',
    options: [
      'Immediate (1-2 weeks)',
      'Short-term (1-3 months)',
      'Medium-term (3-6 months)',
      'Long-term (6+ months)'
    ]
  },
  {
    id: 'step4',
    title: 'What level of engagement do you need?',
    options: [
      'One-time Assessment',
      'Project-based Implementation',
      'Ongoing Advisory (Retainer)',
      'Full Managed Service'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Comprehensive Cybersecurity Services
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8">
                38 specialized OT/IT security solutions designed to transform your enterprise security posture. From strategic consulting to hands-on implementation, we deliver clarity, speed, and unmatched expertise.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-sm font-medium text-text-primary">NIST Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-sm font-medium text-text-primary">IEC 62443 Expert</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-sm font-medium text-text-primary">Claroty Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <ServicesInteractive
              services={mockServices}
              categories={categories}
              industries={industries}
              serviceTypes={serviceTypes}
              urgencyLevels={urgencyLevels}
              builderSteps={builderSteps}
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Security Posture?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Schedule a consultation to discuss your specific security challenges and discover how our expertise can deliver measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary rounded-md hover:shadow-xl transition-smooth font-semibold text-lg"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-smooth font-semibold text-lg"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}