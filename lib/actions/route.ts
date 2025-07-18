"use server";
import Blog from "../database/models/blog.model";
import { connectToDatabase } from "../database";
import Project from "../database/models/project.model";

interface CreateBlogParams {
  title: string;
  description: string;
  imageUrl: string;
  featured: boolean;
}

interface CreateProjectParams {

  name: string;
  description: string;
  techStack: string;
  liveSite: string;
  github: string;
  achieved: string;
  implementation: string;
  imageUrl: string;
  featured: boolean;
}


export async function getProjects() {
  try {
    await connectToDatabase();
    const data = await Project.find({ featured: true }).lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getProjectById(id: string) {
  try {
    await connectToDatabase();
    const data = await Project.findById(id).lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
}

export async function getBlogById(id: string) {
  try {
    await connectToDatabase();
    const data = await Blog.findById(id).lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
}

export async function getProjectsAll() {
  try {
    await connectToDatabase();
    const data = await Project.find().lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getBlogsAll() {
  try {
    await connectToDatabase();
    const data = await Blog.find().lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getBlogs() {
  try {
    await connectToDatabase();
    const data = await Blog.find({ featured: true }).lean();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function createBlog({
  title,
  description,
  imageUrl,
  featured,
}: CreateBlogParams) {
  try {
    await connectToDatabase();

    const newBlog = await Blog.create({
      title,
      description,
      imageUrl,
      featured,
    });

    return {
      success: true,
      data:  JSON.parse(JSON.stringify(newBlog)) ,
    };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function createProject({
  name,
  description,
  techStack,
  liveSite,
  github,
  achieved,
  implementation,
  imageUrl,
  featured,
}: CreateProjectParams) {
  try {
    await connectToDatabase();
    const newProject = await Project.create({
      name,
      description,
      techStack,
      liveSite,
      github,
      achieved,
      implementation,
      imageUrl,
      featured,
    });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newProject)),
    };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Something went wrong" };
  }
}
