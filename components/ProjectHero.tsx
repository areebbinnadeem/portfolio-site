import { CheckIcon, CodeIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "@/public/pexels-pixabay-247791.jpg";

const techStack = [
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "SQL", logo: "/logos/sql.svg" },
  { name: "Linux", logo: "/logos/Linux.svg" },
  { name: "Power BI", logo: "/logos/powerbi.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "GitHub Actions", logo: "/logos/githubactions.svg" },
  { name: "Hopsworks", logo: "/logos/hopsworks.svg" },
  { name: "Pandas", logo: "/logos/pandas.svg" },
  { name: "scikit-learn", logo: "/logos/scikit-learn.svg" },
  { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
  { name: "Keras", logo: "/logos/keras.svg" },
  { name: "PyTorch", logo: "/logos/pytorch.svg" },
  { name: "OpenCV", logo: "/logos/opencv.svg" },
  { name: "LLM", logo: "/logos/llm.svg" },
  { name: "SHAP", logo: "/logos/shap.svg" },
  { name: "LIME", logo: "/logos/lime.svg" },
  { name: "HuggingFace", logo: "/logos/huggingface.svg" },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#3D3D43]">
              About Me
            </div>
            <h2 className="text-3xl font-bold  md:text-4xl/tight">
              My Skills and Experience
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I’m an Artificial Intelligence graduate passionate about building intelligent systems with real-world impact. My expertise lies in machine learning, computer vision, natural language processing, and large language models. I’ve developed and deployed end-to-end AI applications using modern tools like TensorFlow, PyTorch, Docker, and AWS. With hands-on experience in model interpretability, MLOps, and full-stack integration, I strive to bridge the gap between AI research and production-ready solutions.
            </p>
          </div>

          <ul className="grid gap-4">
            <li className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {techStack.map(({ name, logo }) => (
                <div
                  key={name}
                  className="relative group inline-flex items-center rounded-md px-3 py-2 text-sm font-light cursor-pointer bg-[#3D3D43] text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-5 h-5 mr-2"
                  />

                  {name}
                </div>
              ))}
            </li>

            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Experienced in deploying ML pipelines using Hopsworks and GitHub Actions
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Proficient in building AI-powered applications with computer vision and NLP
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Skilled in model interpretability using SHAP, LIME, and explainable AI techniques
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Hands-on experience with MLOps tools including Docker, GitHub Actions, and Snowflake
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Specialized in large language models and building retrieval-augmented generation apps
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Comfortable with end-to-end deployment on AWS EC2, Hopsworks, and containerized environments
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={image}
            width="550"
            height="550"
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;