
import React from 'react';
import { Heart, Award, Clock, Users, Sparkles, Shield } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-theuyir-yellow/10 rounded-lg text-theuyir-darkgrey">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-theuyir-lightgrey to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">OUR CORE VALUES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">How We're Making a <span className="yellow-highlight">Difference</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is built on the principles of transparency, accessibility, and direct impact. 
            We connect those who need help with those who can provide it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Heart size={24} />}
            title="Direct Aid"
            description="Connect beneficiaries directly with donors for specific needs, from food and shelter to education and healthcare."
          />
          
          <FeatureCard 
            icon={<Award size={24} />}
            title="Verified NGOs"
            description="Every organization on our platform is thoroughly verified to ensure legitimacy and build trust with donors."
          />
          
          <FeatureCard 
            icon={<Clock size={24} />}
            title="Real-Time Updates"
            description="Track the progress of donations and volunteer work through our transparent monitoring system."
          />
          
          <FeatureCard 
            icon={<Users size={24} />}
            title="Skilled Volunteering"
            description="Match volunteers with opportunities based on their skills, location, and availability."
          />
          
          <FeatureCard 
            icon={<Sparkles size={24} />}
            title="Impact Stories"
            description="See the real impact of your contributions through documented success stories from beneficiaries."
          />
          
          <FeatureCard 
            icon={<Shield size={24} />}
            title="Secure Transactions"
            description="Process donations securely through trusted payment gateways with complete transparency."
          />
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-theuyir-pink hover:text-theuyir-darkgrey font-medium transition-colors">
            <span>Learn more about our approach</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
