
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/bb';

const stories = [
  {
    id: 1,
    title: "Providing Shelter for Homeless Families",
    quote: "The support from Theuyir Mei helped us find a safe place to live after we lost everything in the floods.",
    name: "Priya and Family",
    location: "Chennai",
    image: "/lovable-uploads/56f47960-da89-4cc6-b87e-03285fefc9a5.png",
    category: "Shelter"
  },
  {
    id: 2,
    title: "Education for Underprivileged Children",
    quote: "Thanks to the scholarship program, I can continue my studies and pursue my dream of becoming a doctor.",
    name: "Rajan",
    location: "Madurai",
    image: "https://images.unsplash.com/photo-1594708767771-a5e9d3012f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Education"
  },
  {
    id: 3,
    title: "Medical Aid for Senior Citizens",
    quote: "The free medical camp organized by Theuyir Mei provided me with the medication I couldn't afford.",
    name: "Lakshmi",
    location: "Coimbatore",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Healthcare"
  },
  {
    id: 4,
    title: "Skill Training for Youth",
    quote: "Learning computer skills has opened up new opportunities for me. I now work remotely and support my family.",
    name: "Vikram",
    location: "Trichy",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Skill Development"
  }
];

const ImpactStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-20 bg-theuyir-darkgrey text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="inline-block bg-theuyir-yellow/20 text-theuyir-yellow px-4 py-1 rounded-full text-sm font-medium mb-4">
            IMPACT STORIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making a <span className="yellow-highlight">Real Difference</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These stories highlight the impact of our collective efforts and the real lives we've touched together.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div 
            ref={slideRef}
            className="transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {stories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-theuyir-yellow text-black text-xs font-semibold px-3 py-1 rounded-full">
                          {story.category}
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                        <blockquote className="text-gray-300 italic mb-6 text-lg">
                          "{story.quote}"
                        </blockquote>
                        <div className="mb-6">
                          <p className="font-semibold text-theuyir-yellow">{story.name}</p>
                          <p className="text-gray-400">{story.location}</p>
                        </div>
                        <Button variant="primary" size="md">
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors"
            aria-label="Previous story"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors"
            aria-label="Next story"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-theuyir-yellow w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Impact Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
