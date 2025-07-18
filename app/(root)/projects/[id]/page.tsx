"use client";
import ProjectCollaborate from "@/components/ProjectCollaborate";

import { Button } from "@/components/ui/button";
import { CodeIcon, Github } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "@/public/pexels-divinetechygirl-1181675.jpg";
import { useParams } from "next/navigation";
import { getProjectById } from "@/lib/actions/route";
import Link from "next/link";

interface Project {
  _id: string;
  name: string;
  description: string;
  techStack: string;
  liveSite: string;
  github: string;
  achieved: string;
  implementation: string;
  imageUrl: string;
  featured: string;
}

const page = () => {
  const { id } = useParams() as { id: string };

  const [project, setProject] = useState<Project | null>(null);
  const [techStack, setTechStack] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getProjectById(id);

      if (result.success && result.data) {
        const data = result.data as Project | Project[];
        const project = Array.isArray(data)
          ? data.length > 0
            ? data[0]
            : null
          : data;
        setProject(project);
        if (project) {
          setTechStack(
            project.techStack.split(",").map((tech: string) => tech.trim())
          );
        }
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4] mt-5">
        <div className="container px-4 md:px-6">
          {project ? (
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-medium  lg:text-5xl text-[#E7E7E4] md:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-4 md:text-xl ">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium bg-[#3D3D43]"
                    >
                      <CodeIcon className=" mr-2 h-4 w-4" />
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex items-start justify-start gap-3">
                  {project.liveSite && project.liveSite !== "https://none" && (
                    <Link href={project.liveSite}>
                      <Button className="bg-zinc-300 text-black hover:bg-zinc-300 hover:opacity-80 font-medium">
                        Live Site
                      </Button>
                    </Link>
                  )}
                  <Link href={project.github}>
                    <Button className="gap-3 bg-[#E7E7E4]  text-black hover:bg-[#E7E7E4] hover:opacity-80">
                      Github <Github className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src={project.imageUrl}
                width="550"
                height="310"
                alt="Project Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#3D3D43] text-[#E7E7E4]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold  sm:text-3xl">
                What was Achieved?
              </h2>
              <p className="mt-4 md:text-xl ">
                Here are the key features and functionalities that were
                implemented in the project, highlighting the challenges overcome
                and the impact it had.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <p className="">{project?.achieved}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold  sm:text-3xl">
                Implementation Details
              </h2>
              <p className="mt-4 md:text-xl ">
                A more in-depth information about the technical implementation
                of the project, including any unique approaches or challenges
                that were faced.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <p className="">{project?.implementation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectCollaborate />
    </>
  );
};

export default page;
