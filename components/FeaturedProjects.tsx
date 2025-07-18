import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Defect Detection in Textile Industry",
    description:
      "Developed an AI-powered real-time fabric inspection system using CNNs and Vision Transformers to identify weaving defects. Built a full-stack React + Python app for automated quality control in textile industries.",
    imageUrl: "/projects/defect-detection.jpg",
    demo: "https://fyp-defect-detection.vercel.app/",
    github: null,
  },
  {
    name: "PDFBot: AI-Powered Multi-Document Chat Assistant",
    description:
      "Built a Streamlit app to chat with multiple PDFs using Google Gemini Pro, HuggingFace embeddings, and FAISS vector search. Supports multi-turn conversations with contextual Q&A.",
    imageUrl: "/projects/pdfbot.jpg",
    demo: null,
    github: "https://github.com/areebbinnadeem/Chat-with-PDF",
  },
  {
    name: "Pearls AQI Predictor",
    description:
      "Created a serverless Streamlit app for real-time AQI forecasting using Hopsworks pipelines, Docker, GitHub Actions, and SHAP for visualization.",
    imageUrl: "/projects/aqi-predictor.jpg",
    demo: "https://pearls-aqi-predictor.streamlit.app/",
    github: "https://github.com/areebbinnadeem/AQI-Predictor",
  },
  {
    name: "Generating Radiology Reports via Memory-driven Transformer",
    description:
      "Developed a Transformer-based model for automatic radiology report generation using computer vision and encoder-decoder architecture.",
    imageUrl: "/projects/radiologist.jpg",
    demo: "https://radiologist-assistant.streamlit.app/",
    github: "https://github.com/areebbinnadeem/Radiologist-Assistant",
  },
  {
    name: "Sentiment Analysis using Neural Networks",
    description:
      "Built a CNN-based web app for sentiment classification on IMDb reviews using Keras and TensorFlow. Deployed on Streamlit with real-time prediction support.",
    imageUrl: "/projects/sentiment.jpg",
    demo: "https://sentiment-analysis-using-neural-networks-2qqyhg2xv7zrjncmj7tl6.streamlit.app/",
    github: "https://github.com/areebbinnadeem/Sentiment-Analysis-using-Neural-Networks",
  },
  {
    name: "Student Performance Prediction (AWS EC2)",
    description:
      "Developed an ML model to predict math scores, built an end-to-end data pipeline, and deployed a Flask app on AWS EC2.",
    imageUrl: "/projects/student-performance.jpg",
    demo: "https://drive.google.com/file/d/1oOP2pxWKbV0ON3074M613nGimwoeL-id/view?usp=sharing",
    github: "https://github.com/areebbinnadeem/ML-Projects",
  },
  {
    name: "Fashion Recommender System",
    description:
      "Utilized a pre-trained RESNET model to build a recommendation engine for fashion items using image recognition and feature extraction.",
    imageUrl: "/projects/fashion-recommender.jpg",
    demo: null,
    github: "https://github.com/areebbinnadeem/Fashion-Recommender-System",
  },
  {
    name: "ICC Men’s T20 World Cup 2024 Analysis",
    description:
      "Scraped data from Cricinfo using Scrapy, analyzed it using Python + Power Query, and visualized player performance insights in Power BI.",
    imageUrl: "/projects/t20.jpg",
    demo: null,
    github: "https://github.com/areebbinnadeem/T20-World-Cup-2024-DataVisualization",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#3D3D43] text-[#E7E7E4]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Showcasing My Work
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the AI & Data Science applications I've built to
              showcase my skills and impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#18181B] text-[#E7E7E4] border-2 border-[#1b1b1c]"
            >
              <CardHeader>
                <Image
                  src={project.imageUrl}
                  width="550"
                  height="310"
                  alt={project.name}
                  className="w-full aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start justify-start space-y-3">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="line-clamp-4">{project.description}</p>
                  <div className="flex items-center justify-start gap-3 flex-wrap min-h-[42px]">
                    {project.demo && (
                      <Link href={project.demo} target="_blank">
                        <Button className="bg-zinc-300 text-black hover:bg-zinc-300 hover:opacity-80 gap-2">
                          Live Demo <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <Button className="gap-3 bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                          Github <Github className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/projects">
            <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80 max-w-xs">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
