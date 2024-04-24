/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: "public",
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
  },
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  
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
