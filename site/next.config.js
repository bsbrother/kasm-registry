/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bsbrother Registry',
    description: 'My store for Kasm supported workspaces.',
    icon: 'https://bsbrother.github.com/kasm-registry/1.0/icon.png',
    listUrl: 'https://bsbrother.github.com/kasm-registry/',
    contactUrl: 'https://github.com/bsbrother/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
