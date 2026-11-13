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
      // Old misspelled Webflow URL
      { source: "/colsulting", destination: "/consulting", permanent: true },
    ];
  },
};

export default nextConfig;
