// Add the 'use client' directive for client-side functionality
'use client';

// Importing the arrow icon for the button
import { NotebookPen, Notebook } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter

// Hero component - the big featured section with heading and call-to-action
function Hero() {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    router.push('https://www.google.com'); // Use router.push for navigation
  };

  return (
    // Hero section with blue gradient background
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Main heading */}
          <h2 className="text-5xl font-bold mb-6">
            Discover stories, thinking, and expertise
          </h2>

          {/* Subheading description */}
          <p className="text-xl text-blue-100 mb-8">
            A place where ideas come to life. Read, learn, and explore articles from passionate writers and industry experts.
          </p>

          {/* Call-to-action button */}
          <button
            onClick={handleClick} // Attach the click handler
            className="bg-white text-blue-600 pl-7 pr-5 py-3 mr-8 rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-50 transition-colors inline-flex items-center gap-4"
          >
            Start Reading
            <Notebook className="w-5 h-5" />
          </button>

          <button className="bg-blue-700 border-[1.2px] text-white pl-7 pr-5 py-3 rounded-lg font-semibold hover:cursor-pointer hover:border-blue-500 hover:bg-blue-500 transition-colors inline-flex items-center gap-4">
            Start Writing
            <NotebookPen color="white" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Export so other files can use this component
export default Hero;