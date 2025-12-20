/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // QR code / verbal sharing routes - do not link in UI
      {
        source: '/workshop',
        destination: 'https://lu.ma/savvy-ai-literate',
        permanent: false, // 302 redirect
      },
      {
        source: '/register',
        destination: 'https://lu.ma/savvy-ai-literate',
        permanent: false, // 302 redirect
      },
    ];
  },
};

export default nextConfig;
