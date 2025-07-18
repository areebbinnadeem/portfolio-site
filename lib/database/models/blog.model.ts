// models/Blog.js
import { Schema, model, models } from "mongoose";


const BlogSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, 
    featured: {type: Boolean, default: false}
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;