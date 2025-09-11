/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // leave empty unless using a non-standard port
        pathname: "/images/**", // allow all image paths under /images
      },
    ],
  },
};

module.exports = nextConfig;
