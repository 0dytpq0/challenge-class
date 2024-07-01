/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dnvefa72aowie.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
