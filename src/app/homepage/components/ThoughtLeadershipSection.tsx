import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
}

interface ThoughtLeadershipSectionProps {
  className?: string;
}

const ThoughtLeadershipSection = ({ className = '' }: ThoughtLeadershipSectionProps) => {
  const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of OT Security: Trends Shaping Industrial Cybersecurity in 2025',
    excerpt: 'Explore emerging threats and innovative defense strategies transforming operational technology security landscapes across critical infrastructure sectors.',
    category: 'Industry Insights',
    readTime: '8 min read',
    date: 'December 2024',
    image: "/site_images/img_015.png",
    imageAlt: 'Futuristic digital network visualization with glowing blue connections representing cybersecurity infrastructure'
  },
  {
    id: 2,
    title: 'NIST Framework 2.0: Essential Updates Every CISO Must Implement',
    excerpt: 'Comprehensive breakdown of critical changes in the updated NIST Cybersecurity Framework and actionable implementation strategies for enterprise environments.',
    category: 'Compliance',
    readTime: '12 min read',
    date: 'November 2024',
    image: "/site_images/img_017.png",
    imageAlt: 'Professional business documents and compliance checklist on modern office desk with laptop'
  },
  {
    id: 3,
    title: 'Claroty Platform Deep Dive: Maximizing ROI Through Advanced Configuration',
    excerpt: 'Expert techniques for optimizing Claroty deployments to achieve superior threat detection, faster incident response, and measurable security improvements.',
    category: 'Technical Guide',
    readTime: '15 min read',
    date: 'October 2024',
    image: "/site_images/img_045.png",
    imageAlt: 'Advanced cybersecurity monitoring dashboard displaying real-time threat analytics and network security metrics'
  }];


  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Latest Insights & Thought Leadership
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Expert perspectives on industrial cybersecurity, compliance frameworks, and emerging threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) =>
          <article key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-smooth border border-border overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="CalendarIcon" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="ClockIcon" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-smooth">
                  {article.title}
                </h3>

                <p className="text-text-secondary line-clamp-3">
                  {article.excerpt}
                </p>

                <Link
                href={`/insights/${article.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-smooth">

                  Read Article
                  <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/insights"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-smooth font-semibold text-lg">

            View All Insights
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default ThoughtLeadershipSection;