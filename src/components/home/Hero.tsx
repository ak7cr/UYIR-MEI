
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';

const Hero = () => {
  const { setIsLoading } = useLoading();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);
  
  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 bg-gradient-to-b from-theuyir-darkgrey/5 to-white/80">      
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <div className="bg-theuyir-darkgrey/10 backdrop-blur-md p-2 rounded-lg inline-flex items-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="bg-theuyir-yellow text-xs font-semibold px-3 py-1 rounded-md mr-2">FOUNDED 2023</span>
            <span className="text-theuyir-darkgrey text-sm font-medium">Empowering Communities Across India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-theuyir-darkgrey mb-8 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <span className="block mb-1">HELPING THE</span>
            <span className="block mb-1">HUNGRY, HOMELESS</span>
            <span className="block">AND HURTING.</span>
          </h1>
          
          <p className="text-theuyir-darkgrey/90 text-lg mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            Uyir Mei connects those in need with donors, volunteers, and NGOs to create meaningful impact through a unified platform focused on transparency and direct aid.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Link to="/get-involved" onClick={() => handleNavigation('/get-involved')}>
              <Button size="lg" className="group transition-all duration-300 transform hover:translate-x-1">
                GET INVOLVED 
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about" onClick={() => handleNavigation('/about')}>
              <Button variant="outline" size="lg" className="bg-white/10 text-theuyir-darkgrey border-theuyir-darkgrey border-opacity-40 hover:bg-white/20 transition-all duration-300">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Beneficiaries</h3>
            <p className="text-gray-600">Access essential resources and services</p>
            <Link to="/services" onClick={() => handleNavigation('/services')} className="inline-flex items-center mt-3 text-theuyir-pink font-medium group">
              Register 
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">NGOs</h3>
            <p className="text-gray-600">Partner with us to extend your reach</p>
            <Link to="/services" onClick={() => handleNavigation('/services')} className="inline-flex items-center mt-3 text-theuyir-pink font-medium group">
              Join Us 
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Donors</h3>
            <p className="text-gray-600">Make transparent, impactful contributions</p>
            <Link to="/give" onClick={() => handleNavigation('/give')} className="inline-flex items-center mt-3 text-theuyir-pink font-medium group">
              Donate 
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Volunteers</h3>
            <p className="text-gray-600">Offer your time and skills to help others</p>
            <Link to="/get-involved" onClick={() => handleNavigation('/get-involved')} className="inline-flex items-center mt-3 text-theuyir-pink font-medium group">
              Sign Up 
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
