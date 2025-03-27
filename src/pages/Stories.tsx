import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, Calendar, User, Heart, MessageSquare, Search, 
  Tag, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Button, getButtonClassNames } from '@/utils/buttonImports';

const Stories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'Empowering Women Through Education',
      content: 'Read how we are helping women gain access to education and build a better future for themselves and their families.',
      date: 'July 12, 2023',
      author: 'Aisha Khan',
      tags: ['education', 'women empowerment'],
      image: 'https://images.unsplash.com/photo-1556075798-7ca018e9d97a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: 'Providing Clean Water to Rural Communities',
      content: 'Learn about our efforts to bring clean and safe drinking water to villages in need, improving health and sanitation.',
      date: 'June 28, 2023',
      author: 'Raj Patel',
      tags: ['clean water', 'rural development'],
      image: 'https://images.unsplash.com/photo-1504196623794-982834a59864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      title: 'Supporting Healthcare for Underserved Populations',
      content: 'Discover how we are delivering essential healthcare services to those who lack access, ensuring a healthier future for all.',
      date: 'May 15, 2023',
      author: 'Fatima Ali',
      tags: ['healthcare', 'community health'],
      image: 'https://images.unsplash.com/photo-1532938314630-e96f17bb43e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

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

  const filteredStories = stories.filter(story => {
    const searchMatch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.content.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = selectedTag ? story.tags.includes(selectedTag) : true;
    return searchMatch && tagMatch;
  });

  const allTags = [...new Set(stories.map(story => story.tags).flat())];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
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
              <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                INSPIRING STORIES
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stories of <span className="yellow-highlight">Impact</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Read inspiring stories of how we are making a difference in the lives of individuals and communities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 fade-in-section opacity-0">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-theuyir-pink focus:border-theuyir-pink"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Filter by Tag:</span>
                  <select
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-theuyir-pink focus:border-theuyir-pink"
                    value={selectedTag || ''}
                    onChange={(e) => setSelectedTag(e.target.value === '' ? null : e.target.value)}
                  >
                    <option value="">All Tags</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stories Grid */}
        <section className="py-20 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map(story => (
                <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-section opacity-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1 text-theuyir-pink" />
                        <span className="text-gray-600 text-sm">{story.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-1 text-theuyir-pink" />
                        <span className="text-gray-600 text-sm">{story.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-theuyir-darkgrey">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.content.substring(0, 100)}...</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {story.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          <Tag size={12} className="inline-block mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="default" size="default" className="group">
                      Read More Stories <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredStories.length === 0 && (
              <div className="text-center py-10 fade-in-section opacity-0">
                <h3 className="text-2xl font-bold text-theuyir-darkgrey mb-4">No stories found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Pagination */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between fade-in-section opacity-0">
              <Button variant="outline" size="default" className="border-theuyir-darkgrey text-theuyir-darkgrey group">
                <ChevronLeft size={16} className="mr-1" />
                Previous Page
              </Button>
              
              <div className="text-gray-600">
                Page 1 of 5
              </div>
              
              <Button variant="outline" size="default" className="border-theuyir-darkgrey text-theuyir-darkgrey group">
                Next Page
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
