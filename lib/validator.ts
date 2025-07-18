import * as z from "zod";
export const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title should be at least 5 characters long")
    .max(100, "Title cannot be that long"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters long")
    .max(1000, "Cannot be more than a 1000 words"),
  featured: z.boolean().default(false)
});

export const projectSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot be that long"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters long")
    .max(1000, "Description cannot be more than 1000 characters"),
  techStack: z
    .string()
    .min(1, "Each technology name should have at least 1 character"),

  liveSite: z.string().url("Must be a valid URL"),
  github: z.string().url("Must be a valid URL"),
  achieved: z
    .string()
    .min(10, "Achieved details should be at least 10 characters long")
    .max(1000, "Achieved details cannot be more than 1000 characters"),
  implementation: z
    .string()
    .min(10, "Implementation details should be at least 10 characters long")
    .max(1000, "Implementation details cannot be more than 1000 characters"),
  featured: z.boolean().default(false)
});
