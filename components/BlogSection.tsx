"use client";

import React, { useEffect, useState } from "react";

type Blog = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("/api/getMediumBlogs");
      const data = await res.json();
      setBlogs(data.items || []);
    };

    getBlogs();
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-16 px-8 text-white" id="blogs">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#3d3d43] p-6 rounded shadow hover:shadow-md transition-all duration-300"
            >
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{new Date(blog.pubDate).toDateString()}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
