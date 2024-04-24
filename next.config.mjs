/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://shikimori.one/api/animes",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shikimori.one",
      },
    ],
  },
};

export default nextConfig;
