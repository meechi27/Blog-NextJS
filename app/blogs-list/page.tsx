"use client";

import { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";

export default function BlogsList() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("https://thought-flow.ct.ws/back/getBlogs.php")
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
      <BlogGrid posts={blogPosts} num={-1} />
    </div>
  );
}
