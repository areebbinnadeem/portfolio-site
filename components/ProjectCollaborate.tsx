"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ProjectCollaborate = () => {
  const router = useRouter();

  const navigateToHomeAndScroll = (e: any) => {
    e.preventDefault();
    sessionStorage.setItem("scrollToContact", "true");
    router.push("/");
  };

  return (
    <section className="w-full py-24 bg-[#3D3D43] text-[#E7E7E4]">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Interested in Collaborating?
        </h2>
        <p className=" mb-8">
          Let's discuss how I can help elevate your digital presence and drive
          your business forward.
        </p>

        <Link href="/" onClick={navigateToHomeAndScroll} prefetch={false}>
          <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
            Contact Me
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectCollaborate;