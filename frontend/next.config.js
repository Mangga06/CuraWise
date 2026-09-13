/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: "https://curawise-687s.onrender.com/api/:path*",
        },
        {
          source: "/ws/:path*",
          destination: "https://curawise-687s.onrender.com/ws/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;