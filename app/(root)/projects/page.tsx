import AllProjectCard from "@/components/AllProjectCard";
import AllProjectHeader from "@/components/AllProjectHeader";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <AllProjectHeader />
      <AllProjectCard />
    </div>
  );
};

export default ProjectsPage;
