import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.media-allrecipes.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
