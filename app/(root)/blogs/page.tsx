// app/(root)/blogs/page.tsx

import React from "react";
import AllBlogsHeader from "@/components/AllBlogsHeader";
import BlogSection from "@/components/BlogSection";

const BlogsPage = () => {
  return (
    <>
      <AllBlogsHeader />
      <BlogSection />
    </>
  );
};

export default BlogsPage;
