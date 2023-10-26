/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [ "research.lifeway.com", "loveworldnews.org", "uploads-ssl.webflow.com", ]
    },
}

module.exports = nextConfig
