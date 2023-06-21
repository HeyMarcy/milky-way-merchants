const env = require("./.env.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  env,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.scientificamerican.com",
        port: "",
      },
    ],
  },
  daisyui: {
    themes: ["dracula", "night", "cmyk"],
    utils: true,
    logs: true,
    base: true,
  },
};

module.exports = nextConfig;
