"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogById } from "@/lib/actions/route";

interface Blog {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

const BlogPage = () => {
  const { id } = useParams() as { id: string };

  const [blog, setBlogs] = useState<Blog | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await getBlogById(id);

      if (result.success && result.data) {
        const data = result.data as Blog | Blog[];
        const blog = Array.isArray(data) ? (data.length > 0 ? data[0] : null) : data;
        setBlogs(blog);
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      {blog ? (
        <div className="flex flex-col items-center justify-center min-h-dvh px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
            <div className="space-y-2 not-prose">
              <h1 className="capitalize text-4xl font-medium lg:text-5xl text-[#E7E7E4]">
                {blog?.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-[#E7E7E4]">
                <div className="h-4 w-px bg-muted" />
                <div>{new Date(blog?.createdAt).toLocaleDateString()}</div> {/* Format date here */}
              </div>
            </div>
            <div className="text-[#a3a3ac] mt-10">
              <p>
                {blog?.description}
              </p>
            </div>
          </article>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BlogPage;
