/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: '/blog/:subdir*',
        destination: 'https://hong-blog-beta.vercel.app/:subdir*',
      },
      {
        source: '/(.*)',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
