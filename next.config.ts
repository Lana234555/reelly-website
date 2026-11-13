import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep old Webflow URLs working (SEO).
  async redirects() {
    return [
      { source: "/colsulting", destination: "/consulting", permanent: true },
      { source: "/old-home-4", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
