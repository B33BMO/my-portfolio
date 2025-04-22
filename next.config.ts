/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preview.redd.it",
      },
      {
        protocol: "https",
        hostname: "images.steamusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.redd.it", // if you're using this too
      },
    ],
  },
};

module.exports = nextConfig;
