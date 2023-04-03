/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "fxbyhlpaaetzdijcnzkf.supabase.co",
    ],
  },
};

module.exports = nextConfig
