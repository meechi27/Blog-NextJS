import { BookOpen } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ThoughtFlow</h1>
          </div>

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

export default Header;
