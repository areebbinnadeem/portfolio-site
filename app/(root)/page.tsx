"use client";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import ContactPage from "@/components/ContactPage";
import Education from "@/components/Education";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ResumeSection from "@/components/ResumeSection";

import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    if (sessionStorage.getItem("scrollToContact") === "true") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToContact");
    }
  }, []);
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Education />
      <ResumeSection />
      <BlogSection />
      <ContactPage />
    </>
  );
};

export default page;
