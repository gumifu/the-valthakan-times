import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.beehiiv.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
