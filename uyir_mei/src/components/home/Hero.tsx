
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/bb';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/6baa9d06-e666-4b58-be83-ef94e87d1ddb.png"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <div className="bg-theuyir-darkgrey/5 backdrop-blur-sm p-2 rounded inline-flex items-center mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="bg-theuyir-yellow text-xs font-semibold px-2 py-0.5 rounded mr-2">FOUNDED 2023</span>
            <span className="text-white text-sm">Empowering Communities Across India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="yellow-highlight">HELPING THE</span> <br />
            <span>HUNGRY, HOMELESS</span> <br />
            <span>AND HURTING.</span>
          </h1>
          
          <p className="text-white/90 text-lg mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Theuyir Mei connects those in need with donors, volunteers, and NGOs to create meaningful impact through a unified platform focused on transparency and direct aid.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button size="lg">
              GET INVOLVED <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white border-opacity-40 hover:bg-white/20">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Beneficiaries</h3>
            <p className="text-gray-600">Access essential resources and services</p>
            <a href="#" className="inline-flex items-center mt-3 text-theuyir-pink font-medium">
              Register <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">NGOs</h3>
            <p className="text-gray-600">Partner with us to extend your reach</p>
            <a href="#" className="inline-flex items-center mt-3 text-theuyir-pink font-medium">
              Join Us <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Donors</h3>
            <p className="text-gray-600">Make transparent, impactful contributions</p>
            <a href="#" className="inline-flex items-center mt-3 text-theuyir-pink font-medium">
              Donate <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Volunteers</h3>
            <p className="text-gray-600">Offer your time and skills to help others</p>
            <a href="#" className="inline-flex items-center mt-3 text-theuyir-pink font-medium">
              Sign Up <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
