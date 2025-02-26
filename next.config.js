/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.google.com"]
    },
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true
    }
};

module.exports = nextConfig;