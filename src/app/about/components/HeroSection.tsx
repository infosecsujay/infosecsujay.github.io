import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({ name, tagline, description, image, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              {tagline}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {name}
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Global Timezone Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-coral rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <AppImage
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}