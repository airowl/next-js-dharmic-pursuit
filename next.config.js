/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  domains: ['www.dharmicpursuit.com']
}

module.exports = {
  nextConfig,
  images: images
}
