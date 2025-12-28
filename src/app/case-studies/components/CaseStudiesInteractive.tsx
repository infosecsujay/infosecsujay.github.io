'use client';

import { useState, useEffect } from 'react';
import CaseStudyCard from './CaseStudyCard';
import FilterBar from './FilterBar';
import CaseStudyModal from './CaseStudyModal';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  alt: string;
  logo: string;
  logoAlt: string;
  duration: string;
  services: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
    avatarAlt: string;
  };
  timeline: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  technologies: string[];
  pdfUrl: string;
}

const CaseStudiesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedChallenge, setSelectedChallenge] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Critical Infrastructure Protection Overhaul",
    client: "Global Energy Corporation",
    industry: "Energy & Utilities",
    challenge: "Legacy SCADA systems with no network segmentation, exposing critical infrastructure to potential cyber threats. Multiple compliance gaps identified during regulatory audit, risking operational licenses and facing potential fines exceeding $50M.",
    solution: "Implemented comprehensive OT security architecture using Claroty platform for asset discovery and continuous monitoring. Deployed network segmentation strategy aligned with IEC 62443 standards, established secure remote access protocols, and created incident response procedures specific to OT environments.",
    results: [
    "Achieved 100% visibility across 2,500+ OT assets within 45 days",
    "Reduced attack surface by 87% through strategic network segmentation",
    "Eliminated all critical compliance gaps, passing regulatory audit with zero findings",
    "Decreased incident response time from 48 hours to 2 hours",
    "Prevented 23 potential security incidents through proactive threat detection"],

    metrics: [
    { label: "Attack Surface Reduction", value: "87%" },
    { label: "OT Asset Visibility", value: "100%" },
    { label: "Response Time", value: "96% Faster" }],

    image: "/site_images/img_026.png",
    alt: "Industrial control room with multiple monitoring screens showing SCADA systems and network infrastructure",
    logo: "/site_images/img_030.png",
    logoAlt: "Energy corporation logo with blue and green gradient design",
    duration: "6 Months",
    services: ["OT Security Assessment", "Claroty Implementation", "IEC 62443 Compliance", "Network Segmentation"],
    testimonial: {
      quote: "Sujay transformed our security posture from reactive to proactive. His deep understanding of both OT environments and regulatory requirements was invaluable. We now have complete visibility and control over our critical infrastructure.",
      author: "Michael Chen",
      position: "Chief Information Security Officer",
      avatar: "/site_images/img_018.png",
      avatarAlt: "Professional headshot of Asian man in navy suit with confident smile"
    },
    timeline: [
    {
      phase: "Discovery & Assessment",
      duration: "6 Weeks",
      activities: [
      "Comprehensive OT asset inventory and risk assessment",
      "Gap analysis against IEC 62443 and NIST frameworks",
      "Network architecture review and vulnerability scanning"]

    },
    {
      phase: "Architecture Design",
      duration: "4 Weeks",
      activities: [
      "Network segmentation strategy development",
      "Claroty platform deployment planning",
      "Security policy and procedure documentation"]

    },
    {
      phase: "Implementation",
      duration: "12 Weeks",
      activities: [
      "Claroty platform deployment and configuration",
      "Network segmentation implementation",
      "Security controls deployment and testing"]

    },
    {
      phase: "Validation & Handover",
      duration: "4 Weeks",
      activities: [
      "Comprehensive security testing and validation",
      "Team training and knowledge transfer",
      "Ongoing support and optimization planning"]

    }],

    technologies: ["Claroty Platform", "IEC 62443", "NIST CSF", "Palo Alto Firewalls", "Cisco ISE"],
    pdfUrl: "/case-studies/energy-corporation.pdf"
  },
  {
    id: 2,
    title: "Manufacturing Security Transformation",
    client: "Automotive Manufacturing Leader",
    industry: "Manufacturing",
    challenge: "Zero visibility into production line security posture with 15 manufacturing facilities globally. Frequent unplanned downtime due to malware infections costing $2M monthly. No standardized security practices across facilities, creating inconsistent risk exposure.",
    solution: "Deployed unified OT security platform across all facilities with centralized monitoring. Implemented zero-trust architecture for production networks, established vulnerability management program, and created facility-specific incident response playbooks.",
    results: [
    "Reduced unplanned downtime by 94%, saving $22.5M annually",
    "Detected and prevented 47 malware incidents before production impact",
    "Standardized security controls across all 15 facilities",
    "Achieved ISO 27001 certification for OT environments",
    "Improved mean time to detect threats from 14 days to 4 hours"],

    metrics: [
    { label: "Downtime Reduction", value: "94%" },
    { label: "Annual Savings", value: "$22.5M" },
    { label: "Threat Detection", value: "99.2% Faster" }],

    image: "/site_images/img_038.png",
    alt: "Modern automotive manufacturing facility with robotic assembly lines and advanced machinery",
    logo: "/site_images/img_012.png",
    logoAlt: "Automotive manufacturer logo with sleek metallic design",
    duration: "8 Months",
    services: ["OT Security Architecture", "Vulnerability Management", "Zero Trust Implementation", "ISO 27001 Compliance"],
    testimonial: {
      quote: "The ROI was immediate and substantial. Sujay's approach to OT security was pragmatic and production-aware. We achieved enterprise-grade security without disrupting our manufacturing operations.",
      author: "Sarah Williams",
      position: "VP of Operations Technology",
      avatar: "/site_images/img_025.png",
      avatarAlt: "Professional woman with blonde hair in business attire smiling confidently"
    },
    timeline: [
    {
      phase: "Global Assessment",
      duration: "8 Weeks",
      activities: [
      "Multi-site security assessment and baseline establishment",
      "Production impact analysis and risk prioritization",
      "Stakeholder alignment and change management planning"]

    },
    {
      phase: "Pilot Implementation",
      duration: "6 Weeks",
      activities: [
      "Single facility pilot deployment",
      "Security control validation and optimization",
      "Lessons learned documentation"]

    },
    {
      phase: "Global Rollout",
      duration: "16 Weeks",
      activities: [
      "Phased deployment across remaining facilities",
      "Centralized monitoring platform configuration",
      "Local team training and capability building"]

    },
    {
      phase: "Optimization",
      duration: "6 Weeks",
      activities: [
      "Performance tuning and false positive reduction",
      "Advanced threat hunting capabilities enablement",
      "Continuous improvement framework establishment"]

    }],

    technologies: ["Claroty", "Fortinet", "Tenable OT Security", "Splunk", "ServiceNow"],
    pdfUrl: "/case-studies/automotive-manufacturing.pdf"
  },
  {
    id: 3,
    title: "Water Treatment Facility Cyber Resilience",
    client: "Metropolitan Water Authority",
    industry: "Water & Wastewater",
    challenge: "Aging infrastructure with internet-exposed HMI systems creating critical vulnerabilities. No backup systems for critical control functions, risking service disruption to 2 million residents. Regulatory pressure to meet new cybersecurity requirements within 12 months.",
    solution: "Implemented defense-in-depth strategy with network isolation, secure remote access, and redundant control systems. Deployed continuous monitoring with automated threat detection, established disaster recovery procedures, and achieved full regulatory compliance.",
    results: [
    "Eliminated all internet-exposed control systems",
    "Implemented redundant control systems with 99.99% availability",
    "Achieved compliance with EPA cybersecurity requirements",
    "Reduced cyber risk score from critical to low",
    "Established 24/7 security operations capability"],

    metrics: [
    { label: "System Availability", value: "99.99%" },
    { label: "Risk Reduction", value: "92%" },
    { label: "Compliance Status", value: "100%" }],

    image: "/site_images/img_006.png",
    alt: "Water treatment facility with large filtration tanks and control systems",
    logo: "/site_images/img_013.png",
    logoAlt: "Water authority logo with blue wave design",
    duration: "10 Months",
    services: ["Critical Infrastructure Protection", "Disaster Recovery Planning", "Regulatory Compliance", "24/7 SOC Setup"],
    testimonial: {
      quote: "Sujay understood the unique challenges of water infrastructure security. His solution balanced security requirements with operational reliability, giving us confidence in our cyber resilience.",
      author: "Robert Martinez",
      position: "Director of Infrastructure Security",
      avatar: "/site_images/img_042.png",
      avatarAlt: "Hispanic man in professional attire with friendly expression"
    },
    timeline: [
    {
      phase: "Risk Assessment",
      duration: "6 Weeks",
      activities: [
      "Critical asset identification and threat modeling",
      "Regulatory gap analysis and compliance roadmap",
      "Business continuity impact assessment"]

    },
    {
      phase: "Quick Wins",
      duration: "8 Weeks",
      activities: [
      "Internet exposure elimination",
      "Basic network segmentation implementation",
      "Emergency response procedures establishment"]

    },
    {
      phase: "Core Implementation",
      duration: "20 Weeks",
      activities: [
      "Redundant control systems deployment",
      "Advanced monitoring and detection capabilities",
      "Secure remote access implementation"]

    },
    {
      phase: "Compliance & Validation",
      duration: "6 Weeks",
      activities: [
      "Regulatory compliance validation",
      "Disaster recovery testing",
      "Final security assessment and certification"]

    }],

    technologies: ["Claroty", "Cisco Security", "NIST CSF", "ICS-CERT Guidelines", "Dragos Platform"],
    pdfUrl: "/case-studies/water-authority.pdf"
  },
  {
    id: 4,
    title: "Pharmaceutical Production Security",
    client: "Global Pharma Corporation",
    industry: "Pharmaceutical",
    challenge: "FDA compliance requirements for electronic records and signatures in production systems. No segregation between IT and OT networks, creating cross-contamination risks. Legacy equipment with embedded Windows XP systems requiring specialized security approach.",
    solution: "Implemented FDA 21 CFR Part 11 compliant security architecture with audit trail capabilities. Created secure OT network with compensating controls for legacy systems, deployed application whitelisting, and established validation procedures for all security changes.",
    results: [
    "Achieved FDA 21 CFR Part 11 compliance across all production lines",
    "Protected 127 legacy systems without production disruption",
    "Passed FDA inspection with zero security-related observations",
    "Reduced validation time for security changes by 60%",
    "Prevented 8 potential ransomware incidents through proactive controls"],

    metrics: [
    { label: "FDA Compliance", value: "100%" },
    { label: "Legacy Systems Protected", value: "127" },
    { label: "Validation Time", value: "60% Faster" }],

    image: "/site_images/img_007.png",
    alt: "Pharmaceutical manufacturing facility with sterile production equipment and quality control systems",
    logo: "/site_images/img_035.png",
    logoAlt: "Pharmaceutical company logo with medical cross symbol",
    duration: "12 Months",
    services: ["FDA Compliance", "Legacy System Security", "Validation Services", "Application Whitelisting"],
    testimonial: {
      quote: "Sujay's expertise in both cybersecurity and pharmaceutical regulations was exceptional. He navigated the complex validation requirements while maintaining our production schedule.",
      author: "Dr. Emily Thompson",
      position: "VP of Quality Assurance & Compliance",
      avatar: "/site_images/img_003.png",
      avatarAlt: "Professional woman with brown hair in white lab coat"
    },
    timeline: [
    {
      phase: "Compliance Assessment",
      duration: "8 Weeks",
      activities: [
      "FDA 21 CFR Part 11 gap analysis",
      "Legacy system inventory and risk assessment",
      "Validation strategy development"]

    },
    {
      phase: "Architecture Design",
      duration: "8 Weeks",
      activities: [
      "Compliant security architecture design",
      "Compensating controls for legacy systems",
      "Change control and validation procedures"]

    },
    {
      phase: "Phased Implementation",
      duration: "28 Weeks",
      activities: [
      "Production line-by-line security deployment",
      "Validation documentation and testing",
      "FDA inspection preparation"]

    },
    {
      phase: "Certification",
      duration: "8 Weeks",
      activities: [
      "Final validation and compliance verification",
      "FDA inspection support",
      "Continuous compliance program establishment"]

    }],

    technologies: ["Claroty", "Application Whitelisting", "FDA 21 CFR Part 11", "GAMP 5", "Audit Trail Systems"],
    pdfUrl: "/case-studies/pharma-corporation.pdf"
  },
  {
    id: 5,
    title: "Smart Building Security Integration",
    client: "Commercial Real Estate Portfolio",
    industry: "Smart Buildings",
    challenge: "50+ buildings with disparate building automation systems creating security blind spots. HVAC, lighting, and access control systems vulnerable to cyber attacks. No unified security monitoring across portfolio, limiting incident response capabilities.",
    solution: "Deployed unified IoT security platform with centralized visibility across all buildings. Implemented secure-by-design principles for new installations, created building-specific security policies, and established 24/7 monitoring with automated response capabilities.",
    results: [
    "Unified security monitoring across 50+ buildings",
    "Detected and prevented 34 unauthorized access attempts",
    "Reduced energy costs by 18% through secure automation optimization",
    "Achieved SOC 2 Type II certification for building operations",
    "Improved tenant satisfaction scores by 23%"],

    metrics: [
    { label: "Buildings Secured", value: "50+" },
    { label: "Energy Savings", value: "18%" },
    { label: "Tenant Satisfaction", value: "+23%" }],

    image: "/site_images/img_040.png",
    alt: "Modern smart building exterior with glass facade and integrated technology systems",
    logo: "/site_images/img_032.png",
    logoAlt: "Real estate company logo with building silhouette",
    duration: "14 Months",
    services: ["IoT Security", "Building Automation Security", "SOC 2 Compliance", "Unified Monitoring"],
    testimonial: {
      quote: "Sujay brought enterprise-grade security to our building automation systems without compromising functionality. The unified monitoring platform has transformed our operations.",
      author: "James Anderson",
      position: "Chief Technology Officer",
      avatar: "/site_images/img_043.png",
      avatarAlt: "Professional man in dark suit with confident demeanor"
    },
    timeline: [
    {
      phase: "Portfolio Assessment",
      duration: "10 Weeks",
      activities: [
      "Multi-building security assessment",
      "IoT device inventory and risk analysis",
      "Integration requirements gathering"]

    },
    {
      phase: "Platform Selection",
      duration: "6 Weeks",
      activities: [
      "Security platform evaluation and selection",
      "Integration architecture design",
      "Pilot building identification"]

    },
    {
      phase: "Pilot & Rollout",
      duration: "32 Weeks",
      activities: [
      "Pilot building implementation and validation",
      "Phased rollout across portfolio",
      "Tenant communication and training"]

    },
    {
      phase: "Optimization",
      duration: "12 Weeks",
      activities: [
      "Performance optimization and tuning",
      "Advanced automation enablement",
      "SOC 2 certification achievement"]

    }],

    technologies: ["Claroty xDome", "BACnet Security", "Honeywell Building Systems", "Cisco IoT", "Azure IoT"],
    pdfUrl: "/case-studies/real-estate-portfolio.pdf"
  },
  {
    id: 6,
    title: "Oil & Gas Pipeline Security",
    client: "National Pipeline Operator",
    industry: "Oil & Gas",
    challenge: "3,000+ miles of pipeline infrastructure with remote monitoring stations vulnerable to attacks. No encryption for SCADA communications, exposing operational data. Regulatory mandate to implement TSA Pipeline Security Guidelines within 18 months.",
    solution: "Implemented end-to-end encryption for all SCADA communications with zero operational downtime. Deployed edge security devices at 200+ remote sites, established secure satellite communications, and created comprehensive incident response procedures for pipeline operations.",
    results: [
    "Secured 3,000+ miles of pipeline infrastructure",
    "Implemented encryption without operational disruption",
    "Achieved full TSA Pipeline Security Guidelines compliance",
    "Reduced security incidents by 96%",
    "Improved remote site monitoring reliability by 99.7%"],

    metrics: [
    { label: "Pipeline Miles Secured", value: "3,000+" },
    { label: "Security Incidents", value: "96% Reduction" },
    { label: "Monitoring Reliability", value: "99.7%" }],

    image: "/site_images/img_001.png",
    alt: "Oil and gas pipeline infrastructure with monitoring equipment in industrial setting",
    logo: "/site_images/img_011.png",
    logoAlt: "Pipeline operator logo with energy industry design",
    duration: "16 Months",
    services: ["Pipeline Security", "SCADA Encryption", "TSA Compliance", "Remote Site Security"],
    testimonial: {
      quote: "Securing our pipeline infrastructure while maintaining 24/7 operations was a massive challenge. Sujay's team executed flawlessly, and we're now the industry benchmark for pipeline cybersecurity.",
      author: "David Foster",
      position: "Senior VP of Operations",
      avatar: "/site_images/img_022.png",
      avatarAlt: "Mature professional man with gray hair in business casual attire"
    },
    timeline: [
    {
      phase: "Infrastructure Assessment",
      duration: "12 Weeks",
      activities: [
      "Pipeline infrastructure security assessment",
      "Remote site vulnerability analysis",
      "TSA compliance gap identification"]

    },
    {
      phase: "Encryption Deployment",
      duration: "24 Weeks",
      activities: [
      "SCADA encryption implementation",
      "Secure communications establishment",
      "Zero-downtime migration execution"]

    },
    {
      phase: "Remote Site Security",
      duration: "20 Weeks",
      activities: [
      "Edge security device deployment",
      "Satellite communications security",
      "Local monitoring capabilities"]

    },
    {
      phase: "Compliance & Validation",
      duration: "8 Weeks",
      activities: [
      "TSA compliance validation",
      "Security testing and penetration testing",
      "Regulatory audit preparation and success"]

    }],

    technologies: ["Claroty", "Encrypted SCADA", "TSA Guidelines", "Satellite Security", "Fortinet"],
    pdfUrl: "/case-studies/pipeline-operator.pdf"
  }];


  const industries = Array.from(new Set(caseStudies.map((study) => study.industry)));
  const challengeTypes = ["Compliance", "Legacy Systems", "Network Security", "Monitoring", "Infrastructure"];
  const solutionCategories = ["OT Security", "Claroty Implementation", "Compliance", "Network Segmentation", "Monitoring"];

  const filteredStudies = caseStudies.filter((study) => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesSearch = searchQuery === '' ||
    study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.challenge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesSearch;
  });

  const handleViewDetails = (id: number) => {
    const study = caseStudies.find((s) => s.id === id);
    if (study) {
      setSelectedStudy(study);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStudy(null), 300);
  };

  const handleClearFilters = () => {
    setSelectedIndustry('all');
    setSelectedChallenge('all');
    setSelectedSolution('all');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-surface rounded w-1/3"></div>
            <div className="h-32 bg-surface rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-96 bg-surface rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterBar
          industries={industries}
          challengeTypes={challengeTypes}
          solutionCategories={solutionCategories}
          selectedIndustry={selectedIndustry}
          selectedChallenge={selectedChallenge}
          selectedSolution={selectedSolution}
          searchQuery={searchQuery}
          onIndustryChange={setSelectedIndustry}
          onChallengeChange={setSelectedChallenge}
          onSolutionChange={setSelectedSolution}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters} />


        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary">
              Showing <span className="font-semibold text-text-primary">{filteredStudies.length}</span> of{' '}
              <span className="font-semibold text-text-primary">{caseStudies.length}</span> case studies
            </p>
          </div>
        </div>

        {filteredStudies.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) =>
          <CaseStudyCard
            key={study.id}
            study={study}
            onViewDetails={handleViewDetails} />

          )}
          </div> :

        <div className="text-center py-16">
            <Icon name="FolderOpenIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">No case studies found</h3>
            <p className="text-text-secondary mb-6">Try adjusting your filters or search query</p>
            <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-md transition-smooth font-semibold">

              Clear All Filters
            </button>
          </div>
        }
      </div>

      <CaseStudyModal
        study={selectedStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal} />

    </div>);

};

export default CaseStudiesInteractive;