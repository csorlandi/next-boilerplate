const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
}

module.exports = withPWA(nextConfig);
