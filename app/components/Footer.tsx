import { BookOpen } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-white font-bold">ThoughtFlow</span>
            </div>
            <p className="text-sm text-gray-400">
              Inspiring minds through quality content
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/blogs-list" className="hover:text-white transition-colors">Articles</a>
            <a href="/create-blog" className="hover:text-white transition-colors">Write</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ThoughtFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;