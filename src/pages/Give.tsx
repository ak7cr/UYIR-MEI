import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/utils/buttonImports';
import { CreditCard, Bank, FileText, ShieldCheck, HelpCircle } from 'lucide-react';

const Give = () => {
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
                GIVE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Make a Difference Today
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Your contribution can transform lives and build stronger communities. Join us in making a positive impact.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Give Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                WAYS TO GIVE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Support Our Cause
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the giving method that works best for you and help us continue our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-theuyir-lightgrey p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0">
                <div className="bg-theuyir-pink/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <CreditCard className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Online Donation</h3>
                <p className="text-gray-600 mb-4">Make a secure online donation with your credit card or PayPal account.</p>
                <Button variant="default" size="default">Donate Now</Button>
              </div>

              <div className="bg-theuyir-lightgrey p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="bg-theuyir-pink/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Bank className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Bank Transfer</h3>
                <p className="text-gray-600 mb-4">Transfer funds directly to our bank account. Contact us for bank details.</p>
                <Button variant="default" size="default">Bank Details</Button>
              </div>

              <div className="bg-theuyir-lightgrey p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="bg-theuyir-pink/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="text-theuyir-darkgrey" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Corporate Giving</h3>
                <p className="text-gray-600 mb-4">Partner with us through corporate sponsorships or employee giving programs.</p>
                <Button variant="default" size="default">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Your Impact
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              See how your donations are making a difference in the lives of individuals and communities we serve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="default" className="bg-white text-theuyir-pink hover:bg-white/90">
                View Impact Stories
              </Button>
              <Button variant="outline" size="default" className="bg-white text-theuyir-pink hover:bg-white/90">
                Annual Report
              </Button>
            </div>
          </div>
        </section>

        {/* Security & Transparency Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-section opacity-0">
                <p className="inline-block bg-theuyir-yellow/20 text-theuyir-darkgrey px-4 py-1 rounded-full text-sm font-medium mb-4">
                  SECURITY & TRANSPARENCY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-6">
                  Your Security Matters
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We take your security and trust seriously. All donations are processed through secure, encrypted connections.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are committed to transparency and accountability. Our financial reports are available for review.
                </p>
                <Button variant="default" size="default" className="group">
                  View Financials <ShieldCheck size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="relative fade-in-section opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1560419434-8498b084e9c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Security Matters"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-theuyir-darkgrey">Secure</p>
                  <p className="text-3xl font-bold text-theuyir-pink">Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              Have questions about donating? Check out our FAQ or contact us for assistance.
            </p>
            <div className="fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="outline" size="default" className="bg-white text-theuyir-pink hover:bg-white/90">
                See FAQs <HelpCircle size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Give;
