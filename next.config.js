/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [ "research.lifeway.com", "loveworldnews.org", "uploads-ssl.webflow.com", ]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
