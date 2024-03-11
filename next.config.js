const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
  experimental: {
    mdxRs: true
  }
};
module.exports = withMDX(nextConfig)
