/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['robohash.org'],
  },
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "thumbsnap.com",
  //     port: "",
  //     pathname: "/ZkPjZG9N/**",
  //   },
  // ],
};

module.exports = nextConfig;
