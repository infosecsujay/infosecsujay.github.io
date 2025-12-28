/** @type {import('next').NextConfig} */
const repo = 'ss';

const nextConfig = {
  output: 'export',

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  trailingSlash: true,   // 🔑 THIS FIXES GITHUB PAGES ROUTING

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
