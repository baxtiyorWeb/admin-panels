import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medmapp.uz",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5500",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
