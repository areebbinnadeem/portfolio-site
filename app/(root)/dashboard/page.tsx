import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DasboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full text-[#E7E7E4] px-10 p-5 min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl md:text-6xl  text-[#E7E7E4] max-w-lg text-center">
        Hey, Subhan choose what you wanna do today!
      </h1>
      <div className="flex items-center justify-center gap-3">
        <Link href={"/dashboard/addProject"}>
          <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
            Add Project
          </Button>
        </Link>
        <Link href={"/dashboard/addBlog"}>
          <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
            Add Blog
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DasboardPage;
