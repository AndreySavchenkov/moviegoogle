/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**/**',
      },
    ],
  },
  env: {
    API_KEY: 'JTXBSKR-C3JME8X-Q0X18JC-VPDQN9T',
    BASE_API_URL: 'https://api.kinopoisk.dev/',
  }
};

module.exports = nextConfig;
