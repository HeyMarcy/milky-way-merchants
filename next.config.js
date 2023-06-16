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
};

module.exports = nextConfig;
