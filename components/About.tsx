import { CheckIcon, CodeIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/public/pexels-pixabay-247791.jpg";

const techStack = [
  "Python",
  "Java",
  "SQL",
  "Linux",
  "Power BI",
  "MongoDB",
  "Docker",
  "AWS",
  "Azure",
  "GitHub Actions",
  "Hopsworks",
  "scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "OpenCV",
  "LLM",
  "SHAP",
  "LIME",
  "HuggingFace",
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0a0a0a] text-white py-16 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#3D3D43]">
            About Me
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            My Skills and Experience
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            I’m an Artificial Intelligence graduate passionate about building
            intelligent systems with real-world impact. My expertise lies in
            machine learning, computer vision, natural language processing, and
            large language models. I’ve developed and deployed end-to-end AI
            applications using modern tools like TensorFlow, PyTorch, Docker,
            and AWS.
          </p>

          {/* Tech Stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {techStack.map((item) => (
              <div
                key={item}
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-light cursor-pointer bg-[#3D3D43] text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <CodeIcon className="mr-2 h-4 w-4" />
                {item}
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2 pt-6">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Experienced in deploying ML pipelines using Hopsworks and GitHub Actions
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Proficient in building AI-powered applications with computer vision and NLP
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Skilled in model interpretability using SHAP, LIME, and explainable AI techniques
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Hands-on experience with MLOps tools including Docker and Snowflake
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Specialized in LLMs and building RAG apps
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={image}
            width={500}
            height={500}
            alt="About"
            className="rounded-xl object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
