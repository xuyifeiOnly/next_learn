/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "47.109.56.148",
        port: "8080",
        pathname: "/profile/**",
      },
      {
        protocol: "https",
        hostname: "x7tjz5xqqekyn9vr.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
