import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Design Principles That Matter",
      excerpt: "Understanding the core principles of great design and how they apply to modern digital products and user experiences.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Design",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt: "A comprehensive guide to building applications that can grow with your business and handle increasing user demands.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Engineering",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "The Art of Storytelling in Content",
      excerpt: "How to craft compelling narratives that engage your audience and create lasting connections with your readers.",
      author: "David Park",
      date: "March 8, 2024",
      category: "Writing",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Mastering Remote Collaboration",
      excerpt: "Tips and strategies for effective remote teamwork, communication, and maintaining productivity in distributed teams.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Productivity",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Understanding User Psychology",
      excerpt: "Dive into the psychological principles that drive user behavior and learn how to apply them to create better products.",
      author: "James Wilson",
      date: "March 1, 2024",
      category: "UX Research",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <BlogGrid posts={blogPosts} />
    </div>
  );
}
