/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
          },
          {
            protocol: 'https',
            hostname: '#'
          }
        ]
    }
};

export default nextConfig;
