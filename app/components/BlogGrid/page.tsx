'use client'; // This is a client-side component

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
    posts: BlogPost[];       // We expect to receive one blog post object
};

// BlogCard component - displays a single blog post card
// The { post } in the parameter is "destructuring" - it extracts the post from props
function BlogGrid({ posts }: BlogCardProps) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            {/* Section heading */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h3>

            {/* Grid container - 3 columns on large screens, 2 on medium, 1 on small */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    // Article card with white background and hover effect
                    <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
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
                ))}
            </div>

            {/* Load More button */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Load More Articles
                </button>
            </div>
        </main>
    );
};

// Export so other files can use this component
export default BlogGrid;

