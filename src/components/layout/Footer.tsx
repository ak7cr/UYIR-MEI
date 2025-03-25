
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theuyir-darkgrey text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/b490f380-ac02-47bc-999e-0cb3e0c34afc.png"
                alt="Theuyir Mei"
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-semibold ml-2">Theuyir Mei</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting those in need with those who can help. Together we can make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-theuyir-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-theuyir-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-theuyir-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-theuyir-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-theuyir-yellow pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-theuyir-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-theuyir-yellow transition-colors">What We Do</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-theuyir-yellow transition-colors">Get Involved</Link></li>
              <li><Link to="/give" className="text-gray-300 hover:text-theuyir-yellow transition-colors">Ways to Give</Link></li>
              <li><Link to="/stories" className="text-gray-300 hover:text-theuyir-yellow transition-colors">Impact Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-theuyir-yellow pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-theuyir-yellow" />
                <span className="text-gray-300">123 NGO Street, Chennai, Tamil Nadu, India - 600001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-theuyir-yellow" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-theuyir-yellow" />
                <span className="text-gray-300">contact@theuyirmei.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-theuyir-yellow pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on our initiatives and impact stories.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-black"
              />
              <button className="bg-theuyir-yellow text-black px-4 py-2 rounded-r-lg hover:brightness-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Theuyir Mei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
