'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  imageAlt: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Chen',
    title: 'Chief Information Security Officer',
    company: 'Global Energy Corporation',
    content: 'Sujay transformed our entire OT security posture in just six months. His expertise in Claroty deployment and NIST framework implementation delivered measurable results that exceeded our board\'s expectations. The ROI was evident within the first quarter.',
    rating: 5,
    image: "/site_images/img_024.png",
    imageAlt: 'Professional Asian male executive in navy suit smiling confidently in modern corporate office'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    title: 'VP of Operations',
    company: 'Manufacturing Excellence Inc.',
    content: 'Working with Sujay was a game-changer for our industrial security program. His ability to translate complex technical requirements into actionable strategies made the entire process seamless. Our compliance scores improved by 40% in three months.',
    rating: 5,
    image: "/site_images/img_046.png",
    imageAlt: 'Professional Caucasian female executive with blonde hair in business attire smiling in bright office setting'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    title: 'Director of IT Security',
    company: 'Critical Infrastructure Solutions',
    content: 'The depth of knowledge Sujay brings to OT security is unparalleled. His hands-on approach to Claroty optimization and IEC 62443 compliance helped us achieve certification ahead of schedule. Highly recommend for any enterprise security initiative.',
    rating: 5,
    image: "/site_images/img_028.png",
    imageAlt: 'Professional Indian male executive with beard in formal business attire in contemporary office environment'
  }];


  const handlePrevious = () => {
    setActiveIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className={`bg-gradient-to-br from-surface to-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Hear from CISOs and security executives who transformed their organizations
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <AppImage
                    src={activeTestimonial.image}
                    alt={activeTestimonial.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-3 shadow-lg">
                  <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-1">
                {[...Array(activeTestimonial.rating)].map((_, index) =>
                <Icon key={index} name="StarIcon" size={24} className="text-accent" variant="solid" />
                )}
              </div>

              <blockquote className="text-xl text-text-primary leading-relaxed italic">
                "{activeTestimonial.content}"
              </blockquote>

              <div className="border-t border-border pt-6">
                <p className="text-lg font-bold text-text-primary">{activeTestimonial.name}</p>
                <p className="text-text-secondary">{activeTestimonial.title}</p>
                <p className="text-primary font-semibold">{activeTestimonial.company}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 flex items-center justify-center bg-surface hover:bg-primary hover:text-white rounded-full transition-smooth border border-border"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeftIcon" size={24} />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                index === activeIndex ? 'bg-primary w-8' : 'bg-border'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-surface hover:bg-primary hover:text-white rounded-full transition-smooth border border-border"
              aria-label="Next testimonial">

              <Icon name="ChevronRightIcon" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;