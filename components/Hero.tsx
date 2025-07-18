// components/Hero.tsx

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

const image = "/areeb.png";

const Hero = () => {
  return (
    <section className="w-full py-20 md:px-20 md:py-24 lg:py-32 bg-[#0a0a0a] text-[#E7E7E4]">
      <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight">
              M. Areeb Bin Nadeem
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-gray-300">
              AI Graduate · Machine Learning & Deep Learning Practitioner
            </h2>
            <p className="max-w-[600px] text-base sm:text-lg font-light">
              B.S. Artificial Intelligence graduate specializing in machine learning,
              computer vision, and large language models. Passionate about building intelligent
              systems and deploying real-world AI solutions using Python, TensorFlow,
              and modern frameworks.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap">
            <Link href="/projects" prefetch={false}>
              <Button className="px-8 text-sm font-medium">View Projects</Button>
            </Link>
            <Link href="#contact" prefetch={false}>
              <Button className="bg-[#E7E7E4] text-black hover:opacity-80">
                Contact Me
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/areeb-nadeem/" target="_blank">
              <Button className="gap-3 bg-[#E7E7E4] text-black hover:opacity-80">
                Visit LinkedIn
                <Linkedin className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/areebbinnadeem" target="_blank">
              <Button className="gap-3 bg-[#E7E7E4] text-black hover:opacity-80">
                Visit GitHub
                <Github className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image and Bubble */}
        <div className="relative flex justify-center items-center">
          <Image
            src={image}
            alt="M. Areeb Bin Nadeem"
            width={250}
            height={250}
            className="hidden md:block mx-auto aspect-square object-cover rounded-full border-[4px] border-[#E7E7E4] shadow-lg mt-4"
          />
          <div className="absolute bottom-[80%] left-[60%] transform -translate-x-1/2 p-3 bg-white text-black rounded-lg shadow-lg text-sm font-medium hidden md:block">
            👋 Hi there!
            <span className="absolute -bottom-2 left-3 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-white border-x-[6px] border-x-transparent"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
