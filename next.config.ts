import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // what frontend calls
        destination: "http://localhost:3300/api/:path*", // where it should go
      },
    ];
  },
};

export default nextConfig;
