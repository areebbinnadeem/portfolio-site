/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'miro.medium.com',
      'cdn-images-1.medium.com'  // ✅ Add this line
    ],
  },
};

export default nextConfig;
