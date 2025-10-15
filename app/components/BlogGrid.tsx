'use client';
import { useRouter } from 'next/navigation';
import { Calendar, User } from 'lucide-react';
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
};

type BlogGridProps = {
  posts: BlogPost[];
};

function BlogGrid({ posts, num }: BlogGridProps & { num: number }) {
  const router = useRouter();

  if (num === -1) num = posts.length;

  const handleRedirect = (post: BlogPost) => {
    // Navigate to the dynamic route and pass data via query parameters
    router.push(`/blogs-list/${post.id}?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${encodeURIComponent(post.date)}&category=${encodeURIComponent(post.category)}&readTime=${encodeURIComponent(post.readTime)}&excerpt=${encodeURIComponent(post.excerpt)}&content=${encodeURIComponent(post.content)}`);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, num).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
            onClick={() => handleRedirect(post)} // Redirect on click
          >
            <div className="p-6 cursor-pointer">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-500">{post.readTime}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default BlogGrid;