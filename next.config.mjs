/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy AI Literate page redirect to new system page
      {
        source: '/workshops/ai-literate',
        destination: '/literate',
        permanent: true, // 301 redirect
      },
      // QR code / verbal sharing routes - do not link in UI
      {
        source: '/workshop',
        destination: 'https://askaprilai.newzenler.com/courses/ai-bootcamp-master-chatgpt',
        permanent: false, // 302 redirect
      },
      {
        source: '/register',
        destination: 'https://askaprilai.newzenler.com/courses/ai-bootcamp-master-chatgpt',
        permanent: false, // 302 redirect
      },
      {
        source: '/replay',
        destination: 'https://askaprilai.newzenler.com/courses/ai-bootcamp-master-chatgpt',
        permanent: false, // 302 redirect
      },
    ];
  },
};

export default nextConfig;
