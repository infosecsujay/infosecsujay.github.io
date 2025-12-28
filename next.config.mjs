/** @type {import('next').NextConfig} */
const repo = 'ss';

const nextConfig = {
  output: 'export',

  basePath: `/${repo}`,
  trailingSlash: true,

  distDir: 'docs', // 🔑 THIS IS THE KEY FIX

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
