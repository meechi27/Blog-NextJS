// Importing the BookOpen icon for the footer logo
import { BookOpen } from 'lucide-react';

// Footer component - displays the bottom section with links and info
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Grid with 4 columns - company info, quick links, categories, and contact */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Company Info Column */}
          <div>
            {/* Footer logo */}
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h5 className="text-white font-bold text-lg">ThoughtFlow</h5>
            </div>
            {/* Company tagline */}
            <p className="text-sm">
              Inspiring minds through quality content and meaningful conversations.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Categories</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Writing</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Connect</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright section at the bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 ThoughtFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Export so other files can use this component
export default Footer;
