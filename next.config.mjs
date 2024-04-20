/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: "public",
});
export default withPWA({
  // const nextConfig = {
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
  // };
});


// export default nextConfig;
