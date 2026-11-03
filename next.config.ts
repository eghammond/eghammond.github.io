import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML in out/ for GitHub Pages.
  output: "export",
  // Emit blog/index.html rather than blog.html next to a blog/ folder.
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
