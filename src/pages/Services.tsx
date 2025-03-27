import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import {
  Utensils, Home, GraduationCap, Stethoscope, BookOpen, LifeBuoy
} from 'lucide-react';
import { Button, getButtonClassNames } from '@/utils/buttonImports';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-theuyir-darkgrey text-white overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <img
              src="/lovable-uploads/6baa9d06-e666-4b58-be83-ef94e87d1ddb.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0">
              <Button variant="default" size="default" className="mb-8">
                OUR SERVICES
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How We <span className="yellow-highlight">Create Impact</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Through our integrated approach, we address the most pressing needs of vulnerable communities.
              </p>
            </div>
          </div>
        </section>
      
        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-yellow/20 text-theuyir-yellow px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR CORE SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                What We <span className="yellow-highlight">Offer</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a range of essential services to support vulnerable communities, focusing on food security, education, healthcare, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Service 1 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0">
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <Utensils className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Food Security</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We combat hunger and malnutrition by providing nutritious meals, food packages, and sustainable agriculture programs.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  Learn More <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Service 2 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <Home className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Shelter & Housing</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We provide safe and affordable housing solutions, emergency shelters, and support services for the homeless.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  Explore Options <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Service 3 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <GraduationCap className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Education Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We empower children and youth through scholarships, educational resources, and skill-building programs.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  View Programs <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Service 4 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0">
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <Stethoscope className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Healthcare Services</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We provide access to quality healthcare, medical check-ups, and health awareness campaigns for underserved populations.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  Find Clinics <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Service 5 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <BookOpen className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Skill Development</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We offer vocational training, entrepreneurship programs, and job placement assistance to empower individuals.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  Explore Courses <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Service 6 */}
              <div className="bg-theuyir-lightgrey rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-theuyir-yellow/20 p-3 rounded-full mr-4">
                    <LifeBuoy className="text-theuyir-darkgrey" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-theuyir-darkgrey">Crisis Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We provide immediate assistance, counseling, and resources to individuals and families facing emergencies.
                </p>
                <Button variant="default" size="default" className={getButtonClassNames("group", true)}>
                  Get Help <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="text-center fade-in-section opacity-0">
              <Button variant="outline" size="lg" className="border-theuyir-darkgrey text-theuyir-darkgrey">
                View All Services
              </Button>
            </div>
          </div>
        </section>
        
        {/* Impact Stories */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                REAL IMPACT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Stories of <span className="yellow-highlight">Transformation</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our services have made a real difference in the lives of individuals and communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative fade-in-section opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1505692962103-5494fbec3c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                  alt="Education Impact" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-theuyir-yellow py-3 px-6 rounded-lg shadow-lg">
                  <p className="font-bold text-theuyir-darkgrey text-2xl">200+</p>
                  <p className="text-theuyir-darkgrey text-sm">Children Supported</p>
                </div>
              </div>
              
              <div className="fade-in-section opacity-0">
                <h3 className="text-2xl font-bold mb-4 text-theuyir-darkgrey">
                  Empowering Children Through Education
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We provide educational support to underprivileged children, including school supplies, uniforms, and after-school tutoring programs.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Thanks to Uyir Mei, my daughter is now at the top of her class and dreams of becoming a doctor. We could never have afforded these resources on our own." 
                  <span className="font-medium">— Lakshmi, parent of a beneficiary</span>
                </p>
                <Button variant="secondary" size="default" className="group">
                  Read Full Story <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="text-center fade-in-section opacity-0">
              <Button variant="outline" size="lg" className="border-theuyir-darkgrey text-theuyir-darkgrey">
                View More Impact Stories
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Ready to <span className="yellow-highlight">Transform</span> Lives?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              Join us in our mission to create a more equitable and compassionate society. Together, we can make a lasting impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="lg">
                Donate Now
              </Button>
              <Button size="lg" className="bg-white text-theuyir-pink hover:bg-white/90">
                Get Involved
              </Button>
            </div>
          </div>
        </section>
      
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
