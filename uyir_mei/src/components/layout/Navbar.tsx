
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import Button from '../ui/bb';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b490f380-ac02-47bc-999e-0cb3e0c34afc.png" 
            alt="Theuyir Mei" 
            className="h-12 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-theuyir-darkgrey">Theuyir Mei</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/services" className="nav-link">WHAT WE DO</Link>
          <Link to="/get-involved" className="nav-link">GET INVOLVED</Link>
          <Link to="/give" className="nav-link">WAYS TO GIVE</Link>
          <Link to="/stories" className="nav-link">STORIES</Link>
          <Button variant="primary" size="md">DONATE</Button>
          <button 
            className="text-theuyir-darkgrey hover:text-theuyir-pink"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-theuyir-darkgrey"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="nav-link py-2">ABOUT US</Link>
            <Link to="/services" className="nav-link py-2">WHAT WE DO</Link>
            <Link to="/get-involved" className="nav-link py-2">GET INVOLVED</Link>
            <Link to="/give" className="nav-link py-2">WAYS TO GIVE</Link>
            <Link to="/stories" className="nav-link py-2">STORIES</Link>
            <div className="flex items-center justify-between pt-2">
              <Button variant="primary" size="md" fullWidth>DONATE</Button>
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
