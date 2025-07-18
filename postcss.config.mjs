import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  images: {
    unoptimized: true, // ✅ Enables support for local public/ images
  },
});

export default nextConfig;
