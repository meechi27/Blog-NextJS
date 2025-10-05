// Importing the BookOpen icon for the logo
import { BookOpen } from 'lucide-react';

// Header component - displays the top navigation bar
function Header() {
  return (
    // Header container with white background and bottom border
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Container for logo and navigation */}
        <div className="flex items-center justify-between">

          {/* Logo section - icon + text */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ThoughtFlow</h1>
          </div>

          {/* Navigation links */}
          <nav className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Articles</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Export so other files can use this component
export default Header;
