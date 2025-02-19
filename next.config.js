/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["www.google.com"],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig

