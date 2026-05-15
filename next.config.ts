import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent three.js and R3F from being bundled server-side
  serverExternalPackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
