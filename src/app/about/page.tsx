import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TimelineSection from './components/TimelineSection';
import CertificationSection from './components/CertificationSection';
import MethodologySection from './components/MethodologySection';
import MediaSection from './components/MediaSection';
import RecognitionSection from './components/RecognitionSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: 'About Sujay Shinde - CyberShield Pro',
  description: 'Meet Sujay Shinde, That Cybersecurity Guy from India. Expert in OT/IT security, NIST frameworks, IEC 62443 compliance, and Claroty implementations with proven enterprise success.'
};

export default function AboutPage() {
  const heroData = {
    name: 'Sujay Shinde',
    tagline: 'That Cybersecurity Guy from India',
    description: 'Solving Complex Security Problems with Clarity, Speed, and Unmatched Expertise. Trusted advisor for enterprise OT/IT security transformations.',
    image: "/site_images/img_008.png",
    imageAlt: 'Professional Indian cybersecurity expert in navy blue suit standing confidently in modern office with glass walls and technology displays'
  };

  const storyData = {
    title: 'The Journey to Cybersecurity Excellence',
    content: [
    'My journey into cybersecurity began over a decade ago when I witnessed firsthand the devastating impact of a ransomware attack on a manufacturing facility. That moment crystallized my mission: to protect critical infrastructure and industrial operations from evolving cyber threats.',
    'Through years of hands-on experience across diverse industries—from energy and utilities to manufacturing and transportation—I developed a unique approach that combines deep technical expertise with clear, actionable communication. I believe that effective cybersecurity isn\'t just about implementing tools; it\'s about building resilient systems that people understand and trust.',
    'Today, I specialize in operational technology (OT) security, helping enterprises navigate the complex intersection of IT and OT environments. My expertise spans NIST Cybersecurity Framework, IEC 62443 standards, and advanced platforms like Claroty, enabling organizations to achieve robust security postures while maintaining operational efficiency.'],

    mission: 'To empower enterprises with world-class cybersecurity solutions that protect critical infrastructure, ensure regulatory compliance, and enable confident digital transformation in an increasingly connected world.',
    values: [
    'Clarity in Complexity: Making technical concepts accessible',
    'Speed Without Compromise: Rapid implementation with thorough planning',
    'Continuous Innovation: Staying ahead of emerging threats',
    'Client-Centric Approach: Tailored solutions for unique challenges',
    'Integrity and Trust: Building lasting partnerships',
    'Knowledge Sharing: Elevating the cybersecurity community']

  };

  const timelineData = {
    title: 'Career Milestones & Achievements',
    events: [
    {
      year: '2025',
      title: 'Global Claroty Expert Recognition',
      description: 'Recognized as one of the leading Claroty implementation specialists globally, with successful deployments across 15+ countries and 50+ industrial facilities.',
      type: 'achievement' as const
    },
    {
      year: '2024',
      title: 'IEC 62443 Cybersecurity Expert Certification',
      description: 'Achieved advanced certification in IEC 62443 industrial automation and control systems security, specializing in risk assessment and secure architecture design.',
      type: 'certification' as const
    },
    {
      year: '2023',
      title: 'NIST Cybersecurity Framework Practitioner',
      description: 'Completed comprehensive NIST CSF training and led multiple enterprise-wide framework implementations for Fortune 500 companies.',
      type: 'certification' as const
    },
    {
      year: '2022',
      title: 'Founded CyberShield Pro Consultancy',
      description: 'Established independent consultancy practice focusing on OT/IT security convergence, serving clients across energy, manufacturing, and critical infrastructure sectors.',
      type: 'milestone' as const
    },
    {
      year: '2021',
      title: 'Published OT Security Research Paper',
      description: 'Co-authored influential research on securing industrial control systems, presented at international cybersecurity conferences and cited by industry leaders.',
      type: 'achievement' as const
    },
    {
      year: '2020',
      title: 'Led Major Energy Sector Security Transformation',
      description: 'Directed comprehensive security overhaul for multinational energy company, protecting 200+ SCADA systems and achieving zero security incidents post-implementation.',
      type: 'achievement' as const
    },
    {
      year: '2018',
      title: 'Advanced OT Security Specialization',
      description: 'Completed intensive training in operational technology security, including SCADA systems, industrial networks, and critical infrastructure protection.',
      type: 'certification' as const
    },
    {
      year: '2015',
      title: 'Entered Cybersecurity Field',
      description: 'Began professional cybersecurity career after witnessing critical infrastructure vulnerabilities, committed to protecting industrial operations from cyber threats.',
      type: 'milestone' as const
    }]

  };

  const certificationData = {
    title: 'Professional Certifications & Credentials',
    subtitle: 'Industry-recognized certifications demonstrating expertise across cybersecurity frameworks, operational technology security, and specialized platforms.',
    certifications: [
    {
      name: 'IEC 62443 Cybersecurity Expert',
      issuer: 'ISA/IEC',
      year: '2024',
      image: "/site_images/img_034.png",
      imageAlt: 'IEC 62443 industrial cybersecurity certification badge with blue and gold colors on white background',
      verified: true
    },
    {
      name: 'NIST Cybersecurity Framework Practitioner',
      issuer: 'NIST',
      year: '2023',
      image: "/site_images/img_033.png",
      imageAlt: 'NIST Cybersecurity Framework official certification emblem with red white and blue colors',
      verified: true
    },
    {
      name: 'Claroty Certified Professional',
      issuer: 'Claroty',
      year: '2023',
      image: "/site_images/img_031.png",
      imageAlt: 'Claroty platform certification badge with teal and navy blue branding on light background',
      verified: true
    },
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: '(ISC)²',
      year: '2022',
      image: "/site_images/img_047.png",
      imageAlt: 'CISSP gold certification seal with ISC2 logo on dark blue background',
      verified: true
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2021',
      image: "/site_images/img_037.png",
      imageAlt: 'CEH certification badge with red and black hacker theme design',
      verified: true
    },
    {
      name: 'GIAC Industrial Control Systems Security (GICSP)',
      issuer: 'GIAC',
      year: '2020',
      image: "/site_images/img_036.png",
      imageAlt: 'GIAC GICSP certification emblem with industrial control system graphics on gray background',
      verified: true
    }]

  };

  const methodologyData = {
    title: 'The CyberShield Methodology',
    subtitle: 'A proven four-phase approach that transforms complex security challenges into clear, actionable solutions with measurable results.',
    steps: [
    {
      number: '01',
      title: 'Assess & Analyze',
      description: 'Comprehensive security posture evaluation using industry frameworks, identifying vulnerabilities, gaps, and risk priorities across IT/OT environments.',
      icon: 'MagnifyingGlassIcon'
    },
    {
      number: '02',
      title: 'Design & Plan',
      description: 'Strategic roadmap development with clear milestones, resource allocation, and stakeholder alignment ensuring practical, achievable security objectives.',
      icon: 'PencilSquareIcon'
    },
    {
      number: '03',
      title: 'Implement & Deploy',
      description: 'Rapid yet thorough execution of security controls, tools, and processes with minimal operational disruption and maximum effectiveness.',
      icon: 'LaunchIcon'
    },
    {
      number: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous improvement through performance monitoring, threat intelligence integration, and adaptive security posture enhancement.',
      icon: 'ChartBarIcon'
    }]

  };

  const mediaData = {
    title: 'Media Mentions & Speaking Engagements',
    mentions: [
    {
      title: 'The Future of OT Security: Trends and Predictions for 2025',
      publication: 'Industrial Cybersecurity Magazine',
      date: 'November 2024',
      type: 'article' as const,
      image: "/site_images/img_027.png",
      imageAlt: 'Magazine cover featuring industrial facility with cybersecurity overlay graphics and futuristic blue lighting',
      link: '#'
    },
    {
      title: 'Keynote: Securing Critical Infrastructure in the Age of AI',
      publication: 'Global Cybersecurity Summit 2024',
      date: 'September 2024',
      type: 'speaking' as const,
      image: "/site_images/img_009.png",
      imageAlt: 'Professional speaker on stage at cybersecurity conference with large audience and presentation screens showing security diagrams',
      link: '#'
    },
    {
      title: 'Expert Interview: Claroty Implementation Best Practices',
      publication: 'OT Security Podcast',
      date: 'August 2024',
      type: 'interview' as const,
      image: "/site_images/img_020.png",
      imageAlt: 'Podcast recording studio with microphones and soundproofing panels in professional setting',
      link: '#'
    },
    {
      title: 'IEC 62443 Compliance: A Practical Guide for Manufacturers',
      publication: 'Manufacturing Technology Review',
      date: 'July 2024',
      type: 'article' as const,
      image: "/site_images/img_014.png",
      imageAlt: 'Modern manufacturing facility floor with robotic arms and digital security monitoring displays',
      link: '#'
    },
    {
      title: 'Panel Discussion: Bridging the IT/OT Security Gap',
      publication: 'Industrial IoT Conference',
      date: 'May 2024',
      type: 'speaking' as const,
      image: "/site_images/img_048.png",
      imageAlt: 'Panel of four cybersecurity experts seated on stage with conference branding and audience in background',
      link: '#'
    },
    {
      title: 'Video Series: NIST Cybersecurity Framework Deep Dive',
      publication: 'CyberSec Academy',
      date: 'March 2024',
      type: 'interview' as const,
      image: "/site_images/img_029.png",
      imageAlt: 'Professional video recording setup with camera equipment and cybersecurity expert being interviewed',
      link: '#'
    }]

  };

  const recognitionData = {
    title: 'Peer Recognition & Testimonials',
    subtitle: 'Trusted by industry leaders and cybersecurity professionals worldwide for expertise, reliability, and transformative results.',
    recognitions: [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Chief Information Security Officer',
      company: 'Global Energy Solutions Inc.',
      testimonial: 'Sujay\'s expertise in OT security is unparalleled. His implementation of our Claroty platform reduced our security incident response time by 75% and provided visibility we never thought possible. His ability to explain complex technical concepts to our executive team was instrumental in securing budget approval.',
      relationship: 'Former Client - Strategic Security Transformation'
    },
    {
      name: 'Maria Rodriguez',
      title: 'VP of Operations',
      company: 'Advanced Manufacturing Corp',
      testimonial: 'Working with Sujay was a game-changer for our manufacturing security posture. He not only implemented robust IEC 62443 controls but also trained our team to maintain them. His methodology is clear, practical, and delivers measurable results. We achieved compliance six months ahead of schedule.',
      relationship: 'Client - IEC 62443 Compliance Project'
    },
    {
      name: 'James Chen',
      title: 'Director of IT Security',
      company: 'National Utilities Network',
      testimonial: 'Sujay\'s NIST Cybersecurity Framework implementation transformed our security program from reactive to proactive. His strategic approach and hands-on expertise helped us protect critical infrastructure serving millions of customers. He\'s not just a consultant; he\'s a trusted advisor.',
      relationship: 'Client - NIST CSF Implementation'
    },
    {
      name: 'Sarah Thompson',
      title: 'Cybersecurity Consultant',
      company: 'SecureOT Partners',
      testimonial: 'As a fellow cybersecurity professional, I\'ve had the privilege of collaborating with Sujay on several complex projects. His technical depth, combined with his ability to communicate clearly with stakeholders at all levels, sets him apart. He\'s a true thought leader in the OT security space.',
      relationship: 'Professional Peer - Collaborative Projects'
    }]

  };

  const ctaData = {
    title: 'Ready to Transform Your Security Posture?',
    description: 'Let\'s discuss how my expertise can help protect your critical infrastructure and achieve your cybersecurity objectives. Schedule a consultation today.',
    primaryCTA: {
      text: 'Schedule Consultation',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'View Services',
      href: '/services'
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection {...heroData} />
        <StorySection {...storyData} />
        <TimelineSection {...timelineData} />
        <CertificationSection {...certificationData} />
        <MethodologySection {...methodologyData} />
        <MediaSection {...mediaData} />
        <RecognitionSection {...recognitionData} />
        <CTASection {...ctaData} />
      </main>
      
      <FooterSection />
    </div>);

}