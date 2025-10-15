"use client";

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("https://thought-flow.ct.ws/back/homeBlogs.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogPosts(data.data);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      {/*the num determines how many posts to show initially 6 means the first 6 posts be shown*/}
      <BlogGrid posts={blogPosts} num={6} />
    </div>
  );
}
