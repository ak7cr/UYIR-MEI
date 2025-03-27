import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useLoading } from '@/contexts/LoadingContext';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { setIsLoading } = useLoading();
  const location = useLocation();

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

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
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
              <p className="inline-block bg-theuyir-yellow/20 text-theuyir-yellow px-4 py-1 rounded-full text-sm font-medium mb-4">
                ABOUT US
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="yellow-highlight">Mission</span> and Values
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Learn about our organization, our mission to create positive change, and the core values that guide our work.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section opacity-0">
                <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                  OUR STORY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-6">
                  From a Vision to <span className="yellow-highlight">Reality</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Uyir Mei was founded in 2010 by a group of passionate individuals who saw the urgent need for 
                  community-based solutions to address poverty and inequality in Tamil Nadu.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Starting with a small team of volunteers and a single community center, we have grown into a 
                  leading non-profit organization serving thousands of individuals and families across the state.
                </p>
                <Button variant="default" size="default">
                  Learn More About Our History
                </Button>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl fade-in-section opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Volunteers Working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold text-2xl mb-2">Impacting Lives Since 2010</p>
                    <p className="text-white/80">Empowering communities across Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl fade-in-section opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Children Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold text-2xl mb-2">Education for All</p>
                    <p className="text-white/80">Providing access to quality education</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 fade-in-section opacity-0">
                <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                  OUR MISSION
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-6">
                  Empowering Communities Through <span className="yellow-highlight">Sustainable Solutions</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our mission is to empower marginalized communities in Tamil Nadu by providing access to education, 
                  healthcare, and sustainable livelihood opportunities.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We work in close partnership with local communities to design and implement programs that are culturally 
                  sensitive, environmentally sustainable, and economically viable.
                </p>
                <Button variant="default" size="default">
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-yellow/20 text-theuyir-darkgrey px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR VALUES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Guiding Principles That <span className="yellow-highlight">Shape Our Work</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values define who we are as an organization and guide our decisions, actions, and relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md text-center fade-in-section opacity-0">
                <div className="bg-theuyir-yellow/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/lovable-uploads/09977187-5511-4598-a19d-0c9405812990.png"
                    alt="Compassion"
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Compassion</h3>
                <p className="text-gray-600">
                  We approach our work with empathy, kindness, and a deep commitment to the well-being of those we serve.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md text-center fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="bg-theuyir-yellow/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/lovable-uploads/42851c59-c1ff-4c10-b395-211160893693.png"
                    alt="Integrity"
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest standards of honesty, transparency, and ethical conduct in all our activities.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md text-center fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="bg-theuyir-yellow/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/lovable-uploads/95099119-4332-42f4-991b-5969311c5f53.png"
                    alt="Collaboration"
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of partnerships and work collaboratively with communities, donors, and other organizations.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md text-center fade-in-section opacity-0" style={{ animationDelay: '0.6s' }}>
                <div className="bg-theuyir-yellow/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/lovable-uploads/52999157-c37a-493d-9349-19a854c69691.png"
                    alt="Impact"
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theuyir-darkgrey">Impact</h3>
                <p className="text-gray-600">
                  We are committed to creating measurable, sustainable, and positive change in the lives of those we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR TEAM
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-theuyir-darkgrey mb-4">
                Meet the People Behind <span className="yellow-highlight">Our Success</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of professionals, volunteers, and community leaders are the driving force behind our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden fade-in-section opacity-0">
                <img
                  src="https://images.unsplash.com/photo-1544005313-943cb025c0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Priya Sharma</h3>
                  <p className="text-gray-600 mb-3">Executive Director</p>
                  <p className="text-gray-600">
                    Priya has been with Uyir Mei since its inception and has played a key role in its growth and success.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Arun Kumar</h3>
                  <p className="text-gray-600 mb-3">Program Manager</p>
                  <p className="text-gray-600">
                    Arun oversees our education and livelihood programs, ensuring they are effective and impactful.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">Deepa Nair</h3>
                  <p className="text-gray-600 mb-3">Community Coordinator</p>
                  <p className="text-gray-600">
                    Deepa works closely with local communities to identify needs and implement our programs effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Ready to Make a <span className="yellow-highlight">Difference</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0" style={{ animationDelay: '0.2s' }}>
              Join our community of donors, volunteers, and partners to help us create a more equitable and sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="lg">
                Get Involved
              </Button>
              <Button size="lg" className="bg-white text-theuyir-pink hover:bg-white/90">
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
