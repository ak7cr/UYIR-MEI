
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { useLoading } from '@/contexts/LoadingContext';

const Footer = () => {
  const { setIsLoading } = useLoading();

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <footer className="bg-theuyir-darkgrey text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theuyir-yellow via-theuyir-pink to-theuyir-yellow"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/b490f380-ac02-47bc-999e-0cb3e0c34afc.png"
                alt="Uyir Mei"
                className="h-16 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-xl font-semibold">UYIR MEI</h3>
                <p className="text-xs text-theuyir-yellow tracking-wider">CONNECTING COMPASSION</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting those in need with those who can help. Together we can make a difference in communities across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-theuyir-yellow hover:text-theuyir-darkgrey transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-theuyir-yellow hover:text-theuyir-darkgrey transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-theuyir-yellow hover:text-theuyir-darkgrey transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-theuyir-yellow hover:text-theuyir-darkgrey transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-theuyir-yellow pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-300 hover:text-theuyir-yellow transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={() => handleNavigation('/services')}
                  className="text-gray-300 hover:text-theuyir-yellow transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  <span>What We Do</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-involved" 
                  onClick={() => handleNavigation('/get-involved')}
                  className="text-gray-300 hover:text-theuyir-yellow transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  <span>Get Involved</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/give" 
                  onClick={() => handleNavigation('/give')}
                  className="text-gray-300 hover:text-theuyir-yellow transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  <span>Ways to Give</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/stories" 
                  onClick={() => handleNavigation('/stories')}
                  className="text-gray-300 hover:text-theuyir-yellow transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  <span>Impact Stories</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-theuyir-yellow pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-1 text-theuyir-yellow group-hover:animate-pulse" />
                <span className="text-gray-300 leading-tight">123 NGO Street, Chennai, Tamil Nadu, India - 600001</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-theuyir-yellow group-hover:animate-pulse" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-theuyir-yellow group-hover:animate-pulse" />
                <span className="text-gray-300">contact@uyirmei.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-theuyir-yellow pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">Subscribe to our newsletter for updates on our initiatives and impact stories.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full rounded-l-lg focus:outline-none text-black bg-white"
              />
              <button className="bg-theuyir-yellow text-black px-4 py-3 rounded-r-lg hover:brightness-95 font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">© {new Date().getFullYear()} Uyir Mei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
