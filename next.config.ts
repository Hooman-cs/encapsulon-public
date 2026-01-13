import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "standalone", // Required for AWS Amplify SSR
  reactStrictMode: true,
  trailingSlash: false// Fixes 404 issues
};

export default nextConfig;
