'use client';
import { BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ThoughtFlow</h1>
          </div>

          <nav className="flex gap-8">
            <a 
              onClick={() => router.push('/')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => router.push('/blogs-list')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Articles
            </a>
            <a 
              onClick={() => router.push('/create-blog')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Write
            </a>
            <a 
              onClick={() => router.push('/about')} 
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;