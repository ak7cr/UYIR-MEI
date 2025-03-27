
import React, { useEffect } from 'react';
import { Heart, ArrowRight, Calendar, Target } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ImpactStories from '@/components/home/ImpactStories';
import Button from '@/components/ui/bb';

const Index = () => {
  useEffect(() => {
    // Fade in elements as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Needs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-yellow/10 text-theuyir-darkgrey px-4 py-1 rounded-full text-sm font-medium mb-4">
                CURRENT NEEDS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Help Make a <span className="yellow-highlight">Difference</span> Today
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through the current needs and find meaningful ways to contribute, 
                whether through donations, volunteering, or fulfilling specific requests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Need Card 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg fade-in-section opacity-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594708767771-a5e9d3012f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Education Support" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-theuyir-yellow text-black font-medium px-3 py-1 m-3 rounded-md text-sm">
                    Education
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">School Supplies for Children</h3>
                  <p className="text-gray-600 mb-4">Help provide school supplies for 50 underprivileged children in Chennai.</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span className="text-theuyir-pink font-medium">₹25,000 / ₹50,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-theuyir-pink h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <Button variant="primary" size="md" fullWidth>
                    Donate Now
                  </Button>
                </div>
              </div>
              
              {/* Need Card 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Food Distribution" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-theuyir-yellow text-black font-medium px-3 py-1 m-3 rounded-md text-sm">
                    Food
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Daily Meals for Elderly</h3>
                  <p className="text-gray-600 mb-4">Support our daily meal program for 100 elderly people without families.</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span className="text-theuyir-pink font-medium">₹35,000 / ₹80,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-theuyir-pink h-2 rounded-full" style={{ width: '44%' }}></div>
                    </div>
                  </div>
                  
                  <Button variant="primary" size="md" fullWidth>
                    Donate Now
                  </Button>
                </div>
              </div>
              
              {/* Need Card 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Medical Camp" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-theuyir-yellow text-black font-medium px-3 py-1 m-3 rounded-md text-sm">
                    Healthcare
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Medical Camp in Rural Areas</h3>
                  <p className="text-gray-600 mb-4">Help us organize a medical camp to serve 5 rural villages in Tamil Nadu.</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span className="text-theuyir-pink font-medium">₹75,000 / ₹100,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-theuyir-pink h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <Button variant="primary" size="md" fullWidth>
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 fade-in-section opacity-0">
              <Button variant="secondary" size="lg">
                View All Needs <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        <ImpactStories />
        
        {/* Volunteer Section */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section opacity-0">
                <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                  VOLUNTEER WITH US
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-6">
                  Share Your Time and <span className="yellow-highlight">Skills</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Whether you have a few hours or a regular commitment, your time and skills can make 
                  a significant difference in someone's life. Join our volunteer network and help us 
                  create a more equitable society.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-3 p-2 bg-theuyir-yellow/20 rounded-full text-theuyir-darkgrey">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                      <p className="text-gray-600">Choose when you volunteer based on your availability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 p-2 bg-theuyir-yellow/20 rounded-full text-theuyir-darkgrey">
                      <Target size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Skill-Based Matching</h3>
                      <p className="text-gray-600">Get matched with opportunities that leverage your unique skills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 p-2 bg-theuyir-yellow/20 rounded-full text-theuyir-darkgrey">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Meaningful Impact</h3>
                      <p className="text-gray-600">See the direct impact of your volunteer work</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="secondary" size="lg">
                  Join as Volunteer <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl fade-in-section opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Volunteers Working" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold text-2xl mb-2">Join 500+ Volunteers</p>
                    <p className="text-white/80">Making a difference across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Ready to Make a <span className="yellow-highlight">Difference</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              Join our community of donors, volunteers, NGOs, and beneficiaries. 
              Together, we can create meaningful impact and transform lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="primary" size="lg">
                Donate Now
              </Button>
              <Button size="lg" className="bg-white text-theuyir-pink hover:bg-white/90">
                Register
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
