/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '#',
          },
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
          },
        ]
    }
};

export default nextConfig;
