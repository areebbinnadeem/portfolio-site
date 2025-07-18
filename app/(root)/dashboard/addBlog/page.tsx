"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { blogSchema } from "@/lib/validator";
import FileUploader from "@/components/FileUploader";
import { createBlog } from "@/lib/actions/route";

const AddBlogPage = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);

  const initialValues = {
    title: "",
    description: "",
    featured: true,
  };

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const uploadResponse = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file: image }),
    });

    const uploadData = await uploadResponse.json();

    if (uploadResponse.ok) {
      const blogData = {
        ...values,
        imageUrl: uploadData.url,
      };

      const data = await createBlog(blogData);
      console.log(data);
      toast.success("Blog created successfully");
      form.reset();
      setImage(null);
    } else {
      toast.error("Image upload failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-10 p-5 mt-32 text-white gap-10">
      <h1 className="text-[#E7E7E4] text-3xl md:text-6xl font-bold text-center max-w-md">
        What is on your mind today!
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 mb-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Blog Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Title"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400 w-[300px] md:w-[500px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Blog Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="rounded-2xl placeholder:text-slate-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Use different settings for my mobile devices
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FileUploader onFileSelect={setImage} />

          <Button
            className="bg-white rounded-2xl text-black hover:bg-white hover:opacity-80 mb-14"
            type="submit"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Create Blog"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddBlogPage;
