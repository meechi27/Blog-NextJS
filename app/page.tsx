import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';

export default function Home() {

  // we simulate fetching data here from a database or an API
  // Each blog post now includes a 'content' field

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
      content: "In this article, we dive deeper into how AI and progressive web apps are revolutionizing the web development landscape. We'll discuss practical examples and future predictions.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Design Principles That Matter",
      excerpt: "Understanding the core principles of great design and how they apply to modern digital products and user experiences.",
      content: "This post covers the essential design principles such as balance, contrast, and hierarchy, and how they impact user experience in digital products.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Design",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt: "A comprehensive guide to building applications that can grow with your business and handle increasing user demands.",
      content: "Learn about architectural patterns, cloud solutions, and best practices for building scalable applications that stand the test of time.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Engineering",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "The Art of Storytelling in Content",
      excerpt: "How to craft compelling narratives that engage your audience and create lasting connections with your readers.",
      content: "Discover storytelling techniques and strategies to make your content more engaging and memorable for your audience.",
      author: "David Park",
      date: "March 8, 2024",
      category: "Writing",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Mastering Remote Collaboration",
      excerpt: "Tips and strategies for effective remote teamwork, communication, and maintaining productivity in distributed teams.",
      content: "Explore tools, workflows, and communication strategies that help remote teams stay productive and connected.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Productivity",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Understanding User Psychology",
      excerpt: "Dive into the psychological principles that drive user behavior and learn how to apply them to create better products.",
      content: "We analyze key psychological concepts and how they can be leveraged to improve product design and user engagement.",
      author: "James Wilson",
      date: "March 1, 2024",
      category: "UX Research",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Understanding Ecommerce Trends in 2024",
      excerpt: "Explore the latest trends in ecommerce for 2024, including AI-driven personalization and the rise of social commerce.",
      content: "This article highlights the most important ecommerce trends for 2024, with actionable insights for online retailers.",
      author: "James Wilson",
      date: "March 1, 2024",
      category: "UX Research",
      readTime: "9 min read"
    }
  ];
  // we fetch data here from a database or an API and pass it to the BlogGrid component

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      {/*the num determines how many posts to show initially 6 means the first 6 posts be shown*/}
      <BlogGrid posts={blogPosts} num={6} />
    </div>
  );
}
