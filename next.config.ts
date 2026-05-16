/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML/CSS files
  images: {
    unoptimized: true, // Required for static exports using image components
  },
};

export default nextConfig;