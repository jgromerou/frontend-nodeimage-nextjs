/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backendURL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
