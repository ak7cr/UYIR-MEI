
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLoading } from '@/contexts/LoadingContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 800);
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center transition-transform duration-300 hover:scale-105"
          onClick={() => handleNavigation('/')}
        >
          <img 
            src="/lovable-uploads/b490f380-ac02-47bc-999e-0cb3e0c34afc.png" 
            alt="Uyir Mei" 
            className="h-16 w-auto transition-all duration-300"
          />
          <div className="ml-3">
            <span className="block text-2xl font-bold text-theuyir-darkgrey tracking-wide">UYIR MEI</span>
            <span className="text-xs text-theuyir-pink tracking-wider font-medium">CONNECTING EMPATHY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/about" 
            className={`nav-link relative overflow-hidden group ${location.pathname === '/about' ? 'text-theuyir-pink' : ''}`}
            onClick={() => handleNavigation('/about')}
          >
            <span className="relative z-10">ABOUT US</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theuyir-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            to="/services" 
            className={`nav-link relative overflow-hidden group ${location.pathname === '/services' ? 'text-theuyir-pink' : ''}`}
            onClick={() => handleNavigation('/services')}
          >
            <span className="relative z-10">WHAT WE DO</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theuyir-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            to="/get-involved" 
            className={`nav-link relative overflow-hidden group ${location.pathname === '/get-involved' ? 'text-theuyir-pink' : ''}`}
            onClick={() => handleNavigation('/get-involved')}
          >
            <span className="relative z-10">GET INVOLVED</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theuyir-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            to="/give" 
            className={`nav-link relative overflow-hidden group ${location.pathname === '/give' ? 'text-theuyir-pink' : ''}`}
            onClick={() => handleNavigation('/give')}
          >
            <span className="relative z-10">WAYS TO GIVE</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theuyir-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            to="/stories" 
            className={`nav-link relative overflow-hidden group ${location.pathname === '/stories' ? 'text-theuyir-pink' : ''}`}
            onClick={() => handleNavigation('/stories')}
          >
            <span className="relative z-10">STORIES</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theuyir-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Button 
            variant="default" 
            size="default" 
            className="animate-pulse-soft transition-transform hover:scale-105"
          >
            DONATE
          </Button>
          <button 
            className="text-theuyir-darkgrey hover:text-theuyir-pink transition-all duration-300 transform hover:scale-110"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-theuyir-darkgrey transition-colors duration-300 hover:text-theuyir-pink"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in overflow-hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/about" 
              className={`nav-link py-2 pl-2 border-l-4 ${location.pathname === '/about' ? 'border-theuyir-yellow text-theuyir-pink' : 'border-transparent'}`}
              onClick={() => handleNavigation('/about')}
            >
              ABOUT US
            </Link>
            <Link 
              to="/services" 
              className={`nav-link py-2 pl-2 border-l-4 ${location.pathname === '/services' ? 'border-theuyir-yellow text-theuyir-pink' : 'border-transparent'}`}
              onClick={() => handleNavigation('/services')}
            >
              WHAT WE DO
            </Link>
            <Link 
              to="/get-involved" 
              className={`nav-link py-2 pl-2 border-l-4 ${location.pathname === '/get-involved' ? 'border-theuyir-yellow text-theuyir-pink' : 'border-transparent'}`}
              onClick={() => handleNavigation('/get-involved')}
            >
              GET INVOLVED
            </Link>
            <Link 
              to="/give" 
              className={`nav-link py-2 pl-2 border-l-4 ${location.pathname === '/give' ? 'border-theuyir-yellow text-theuyir-pink' : 'border-transparent'}`}
              onClick={() => handleNavigation('/give')}
            >
              WAYS TO GIVE
            </Link>
            <Link 
              to="/stories" 
              className={`nav-link py-2 pl-2 border-l-4 ${location.pathname === '/stories' ? 'border-theuyir-yellow text-theuyir-pink' : 'border-transparent'}`}
              onClick={() => handleNavigation('/stories')}
            >
              STORIES
            </Link>
            <div className="flex items-center justify-between pt-2">
              <Button variant="default" size="default" fullWidth>DONATE</Button>
              <button 
                className="ml-4 text-theuyir-darkgrey hover:text-theuyir-pink"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
