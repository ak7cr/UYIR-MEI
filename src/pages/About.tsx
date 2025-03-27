import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Award, Heart, Calendar, Users, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/utils/buttonImports';

const About = () => {
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
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-yellow/20 text-theuyir-yellow px-4 py-1 rounded-full text-sm font-medium mb-4">
                ABOUT US
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission and Vision
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Since 2023, Uyir Mei has been working to create a more equitable society by connecting those in need with those who can help, through innovative technology and compassionate action.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-section opacity-0">
                <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                  OUR STORY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-6">
                  How We Started
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Uyir Mei began with a simple observation: in a world of abundance, many still lack access to basic necessities. Despite numerous charitable organizations, there was a significant gap in coordinating resources efficiently across India.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our founders, witnessing both the struggles of underprivileged communities and the willingness of people to help, envisioned a platform that could bridge this divide. Thus, Uyir Mei was born—a technology-driven solution created by three dedicated individuals to connect beneficiaries directly with donors, volunteers, and NGOs.
                </p>
                <Button variant="secondary" size="lg" className="group">
                  Learn More <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="relative fade-in-section opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Our Story" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-theuyir-darkgrey">Founded</p>
                  <p className="text-3xl font-bold text-theuyir-pink">2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-yellow/20 text-theuyir-darkgrey px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR VALUES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Principles That Guide Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values inform every decision we make and every action we take in our mission to create positive change.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0">
                <div className="bg-theuyir-yellow/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Connecting Empathy</h3>
                <p className="text-gray-600">We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="bg-theuyir-yellow/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Integrity</h3>
                <p className="text-gray-600">We operate with complete transparency, accountability, and honesty in all our actions and communications.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="bg-theuyir-yellow/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of partnership and work together with communities, NGOs, and individuals across India.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0" style={{ animationDelay: '0.6s' }}>
                <div className="bg-theuyir-yellow/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Calendar className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Sustainability</h3>
                <p className="text-gray-600">We design our programs and interventions to create lasting change and self-sufficiency in communities.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Ready to Join Our Mission?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              Whether you want to volunteer, donate, or partner with us, there are many ways to get involved and make a difference in communities across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="primary" size="lg">
                Get Involved
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-theuyir-pink hover:bg-white/90">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
