/** @type {import('next').NextConfig} */

const url = new URL(process.env.SALEOR_CLOUD_URL);

const nextConfig = {
  images: {
    domains: [url.hostname],
  },
};

module.exports = nextConfig;
