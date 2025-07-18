"use client";
import { getBlogsAll } from "@/lib/actions/route";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const AllBlogsCard = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await getBlogsAll();

      if (result.success) {
        setBlogs(result.data || []);
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto w-full px-10 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((blogs, index) => (
          <div className="bg-[#3D3D43] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href={`blogs/${blogs._id}`}>
              <img
                src={blogs.imageUrl}
                alt={blogs.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-2 capitalize text-[#E7E7E4]">
                  {blogs.title}
                </h2>
                <p className="line-clamp-2 text-[#E7E7E4] mb-4">
                  {blogs.description}
                </p>
                <Button variant="link" className="bg-black text-[#E7E7E4]">
                  Read More
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsCard;
