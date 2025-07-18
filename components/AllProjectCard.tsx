// app/components/AllProjectCard.tsx

"use client";
import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Defect Detection in Textile Industry",
    description:
      "AI-powered real-time fabric inspection system using CNNs and Vision Transformers to detect weaving defects. Full-stack app with React + Python backend.",
    imageUrl: "/projects/defect-detection.jpg",
    github: null,
    liveSite: "https://fyp-defect-detection.vercel.app/",
  },
  {
    name: "PDFBot: AI-Powered Multi-Document Chat",
    description:
      "Streamlit app to chat with multiple PDFs using Gemini Pro, HuggingFace embeddings, and FAISS-based vector search with memory-augmented retrieval.",
    imageUrl: "/projects/pdfbot.jpg",
    github: "https://github.com/areebbinnadeem/Chat-with-PDF",
    liveSite: null,
  },
  {
    name: "Pearls AQI Predictor",
    description:
      "Serverless AQI forecasting system using Hopsworks, Docker, Streamlit, and SHAP visualizations with automated CI/CD using GitHub Actions.",
    imageUrl: "/projects/aqi-predictor.jpg",
    github: "https://github.com/areebbinnadeem/AQI-Predictor",
    liveSite: "https://pearls-aqi-predictor.streamlit.app/",
  },
  {
    name: "Radiology Report Generator",
    description:
      "Transformer-based encoder-decoder model for generating radiology reports from medical images. Uses pre-trained CNNs for visual feature extraction.",
    imageUrl: "/projects/radiologist.jpg",
    github: "https://github.com/areebbinnadeem/Radiologist-Assistant",
    liveSite: "https://radiologist-assistant.streamlit.app/",
  },
  {
    name: "Sentiment Analysis Web App",
    description:
      "Streamlit app using CNN, LSTM, and LSTM-CNN models to predict IMDb review sentiment. Built with TensorFlow and Keras.",
    imageUrl: "/projects/sentiment.jpg",
    github:
      "https://github.com/areebbinnadeem/Sentiment-Analysis-using-Neural-Networks",
    liveSite:
      "https://sentiment-analysis-using-neural-networks-2qqyhg2xv7zrjncmj7tl6.streamlit.app/",
  },
  {
    name: "Student Performance Prediction",
    description:
      "ML model deployed on AWS EC2 using Flask to predict student math scores. End-to-end data pipeline and web deployment.",
    imageUrl: "/projects/student-performance.jpg",
    github: "https://github.com/areebbinnadeem/ML-Projects",
    liveSite:
      "https://drive.google.com/file/d/1oOP2pxWKbV0ON3074M613nGimwoeL-id/view?usp=sharing",
  },
  {
    name: "Fashion Recommender System",
    description:
      "Built with ResNet to recommend fashion items via feature extraction and classification. Accurate image-based suggestions.",
    imageUrl: "/projects/fashion-recommender.jpg",
    github: "https://github.com/areebbinnadeem/Fashion-Recommender-System",
    liveSite: null,
  },
  {
    name: "ICC T20 World Cup 2024 Analysis",
    description:
      "Scraped Cricinfo data, processed with Python & Power Query, and visualized top performer stats in Power BI.",
    imageUrl: "/projects/t20.jpg",
    github: "https://github.com/areebbinnadeem/T20-World-Cup-2024-DataVisualization",
    liveSite: null,
  },
];

const AllProjectCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col justify-between h-[500px] bg-[#3D3D43] text-[#E7E7E4] px-4 py-4 border-none transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Link
            href={project.liveSite || project.github || "#"}
            target="_blank"
            prefetch={false}
            className="flex flex-col flex-grow"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                width={550}
                height={310}
                alt={project.name}
                className="rounded-md object-cover h-48 w-full"
              />
            </div>
            <div className="mt-4 flex-grow ">
              <h3 className="text-xl font-bold hover:text-primary transition-colors capitalize">
                {project.name}
              </h3>
              <p className="text-sm mt-1 line-clamp-4">{project.description}</p>
            </div>
          </Link>

          <div className="mt-4 flex gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="bg-[#57575f] px-4 py-2 text-sm rounded-md hover:bg-[#4a4a50] transition"
              >
                GitHub
              </Link>
            )}
            {project.liveSite && (
              <Link
                href={project.liveSite}
                target="_blank"
                className="bg-[#57575f] px-4 py-2 text-sm rounded-md hover:bg-[#4a4a50] transition"
              >
                Live Demo
              </Link>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllProjectCard;
