import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/utils/buttonImports';
import { 
  Calendar, 
  User, 
  Heart, 
  MessageSquare, 
  Search, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  useState
} from '@/utils/iconImports';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-56 object-cover" src={story.imageUrl} alt={story.title} />
      <div className="p-6">
        <h3 className="font-semibold text-xl text-theuyir-darkgrey mb-2">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{story.date}</span>
          <User size={16} className="ml-4 mr-2" />
          <span>{story.author}</span>
        </div>
        <Link to={`/story/${story.id}`} className="text-theuyir-pink hover:text-theuyir-darkgrey transition-colors duration-200">
          Read More
        </Link>
      </div>
    </div>
  );
};

const Stories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'Empowering Women Through Education',
      excerpt: 'Read about how our education programs are transforming the lives of women in rural communities.',
      imageUrl: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'March 15, 2024',
      author: 'Priya Sharma',
    },
    {
      id: 2,
      title: 'Providing Clean Water to Villages',
      excerpt: 'Learn how our clean water initiative is bringing safe drinking water to remote villages.',
      imageUrl: 'https://images.unsplash.com/photo-1504196647774-c3f544865f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'February 28, 2024',
      author: 'Amit Patel',
    },
    {
      id: 3,
      title: 'Healthcare for Underprivileged Communities',
      excerpt: 'Discover how our healthcare programs are providing essential medical services to those in need.',
      imageUrl: 'https://images.unsplash.com/photo-1532938314634-03c459aef98b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'January 20, 2024',
      author: 'Anjali Kapoor',
    },
    {
      id: 4,
      title: 'Supporting Sustainable Agriculture',
      excerpt: 'Explore how we are helping farmers adopt sustainable practices to improve their livelihoods.',
      imageUrl: 'https://images.unsplash.com/photo-1518621736915-f46cc4a1e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'December 10, 2023',
      author: 'Rajesh Kumar',
    },
    {
      id: 5,
      title: 'Creating Opportunities Through Skill Development',
      excerpt: 'Find out how our skill development programs are empowering individuals to secure better jobs.',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'November 5, 2023',
      author: 'Deepika Menon',
    },
    {
      id: 6,
      title: 'Emergency Relief After Natural Disasters',
      excerpt: 'Learn about our efforts to provide immediate relief and support to communities affected by natural disasters.',
      imageUrl: 'https://images.unsplash.com/photo-1475924156345-476a6422ec3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'October 18, 2023',
      author: 'Vikram Singh',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-theuyir-darkgrey text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0">
              <p className="inline-block bg-theuyir-pink/10 text-theuyir-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
                IMPACT STORIES
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stories of <span className="yellow-highlight">Hope</span> and <span className="yellow-highlight">Change</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Read inspiring stories of individuals and communities transformed through our initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between fade-in-section opacity-0">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search stories..."
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-theuyir-pink"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <Search size={20} className="text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Heart size={20} className="text-theuyir-pink mr-2" />
                  <span className="text-gray-700">Most Popular</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-theuyir-pink mr-2" />
                  <span className="text-gray-700">Recent Stories</span>
                </div>
                <div className="flex items-center">
                  <Tag size={20} className="text-theuyir-pink mr-2" />
                  <span className="text-gray-700">Categories</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid Section */}
        <section className="py-16 bg-theuyir-lightgrey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section opacity-0">
              {currentStories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>

        {/* Pagination Section */}
        {filteredStories.length > storiesPerPage && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <Pagination>
                <PaginationContent>
                  <PaginationPrevious
                    href="#"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {Array.from({ length: Math.ceil(filteredStories.length / storiesPerPage) }, (_, i) => i + 1).map(page => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={() => paginate(page)}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationNext
                    href="#"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(filteredStories.length / storiesPerPage)}
                  />
                </PaginationContent>
              </Pagination>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-theuyir-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section opacity-0">
              Be a Part of <span className="yellow-highlight">Their Story</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 fade-in-section opacity-0">
              Your support can help us create more stories of hope and change. Join us in making a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-section opacity-0">
              <Button variant="primary" size="lg">
                Donate Now
              </Button>
              <Button size="lg" className="bg-white text-theuyir-pink hover:bg-white/90">
                Get Involved
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
