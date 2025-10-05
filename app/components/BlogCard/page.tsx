'use client';
// Importing icons for the card
import { Calendar, User } from 'lucide-react';

// TypeScript type definition - this tells TypeScript what data this component expects
// It's like a recipe that says "a BlogPost must have these ingredients"
type BlogPost = {
  id: number;           // A unique number for each post
  title: string;        // The post title (text)
  excerpt: string;      // Short description (text)
  author: string;       // Author name (text)
  date: string;         // Publication date (text)
  category: string;     // Category like "Technology" or "Design" (text)
  readTime: string;     // How long it takes to read, like "5 min read" (text)
};

// Props type - defines what data gets passed INTO this component from outside
// Think of props like function parameters - they're values passed in
type BlogCardProps = {
  post: BlogPost;       // We expect to receive one blog post object
};

// BlogCard component - displays a single blog post card
// The { post } in the parameter is "destructuring" - it extracts the post from props
function BlogCard({ post }: BlogCardProps) {
  return (
    // Article card with white background and hover effect
    <article className="bg-white rounded-xl shadow-sm hover:cursor-pointer hover:shadow-md transition-shadow border border-gray-200 overflow-hidden m-2">
      <div className="p-6">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
          {post.category}
        </span>

        {/* Post title */}
        <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
          {post.title}
        </h4>

        {/* Post excerpt (short description) */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Divider line */}
        <div className="border-t border-gray-100 pt-4 mt-4">
          {/* Author and date info */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            {/* Author section */}
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>

            {/* Date section */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Read time */}
          <div className="mt-3 text-sm text-gray-500">
            {post.readTime}
          </div>
        </div>
      </div>
    </article>
  );
}

// Export so other files can use this component
export default BlogCard;
