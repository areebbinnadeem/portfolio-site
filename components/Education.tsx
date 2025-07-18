import { CheckIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/public/1_u2gh1Xv9_e2i5yUNX6m7fw.png";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4] bg-[#0a0a0a] border-t border-[#3D3D43]"
    >
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#3D3D43] px-3 py-1 text-sm">
              Education
            </div>
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              My Academic Background
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I hold a degree in Artificial Intelligence and actively pursue
              professional development through online platforms to stay ahead in
              this rapidly evolving field.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <div>
                <div className="font-medium">
                  Bachelor of Science in Artificial Intelligence
                </div>
                <div>
                  National University of Computer & Emerging Sciences (FAST),
                  Karachi — 2021–2025
                </div>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <div>
                <div className="font-medium">
                  <a
                    href="https://coursera.org/verify/HQ2DWT6C4EJQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    Machine Learning Specialization by DeepLearning.AI (Coursera)
                  </a>
                </div>
                <div>
                  Completed a comprehensive specialization covering supervised
                  learning, ML pipelines, and real-world applications.
                </div>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <div>
                <div className="font-medium">
                  <a
                    href="http://datacamp.com/portfolio/k213007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    DataCamp Online Courses
                  </a>
                </div>
                <div>
                  Completed multiple hands-on courses in Machine Learning, SQL,
                  Docker, LLMs, and more.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Image
          src={image}
          width="550"
          height="550"
          alt="Education"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
};

export default Education;
