import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve('.')
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'resolve360.app',
        pathname: '/**',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/about-us',
        destination: '/#about',
        permanent: true
      },
      {
        source: '/treatment/physiotherapy-for-knee-pain',
        destination: '/conditions/knee-pain',
        permanent: true
      },
      {
        source: '/treatment/physiotherapy-for-back-pain',
        destination: '/conditions/back-pain',
        permanent: true
      },
      {
        source: '/treatment/physiotherapy-for-neck-pain',
        destination: '/conditions/neck-pain',
        permanent: true
      },
      {
        source: '/treatment/physiotherapy-for-shoulder-pain',
        destination: '/conditions/shoulder-pain',
        permanent: true
      },
      {
        source: '/treatment/care-and-recovery-after-disc-bulge',
        destination: '/conditions/disc-bulge',
        permanent: true
      },
      {
        source: '/treatment/causes-of-lower-back-pain',
        destination: '/conditions/back-pain',
        permanent: true
      },
      {
        source: '/treatment/carpal-tunnel-syndrome',
        destination: '/conditions/carpal-tunnel-syndrome',
        permanent: true
      },
      {
        source: '/treatment/:slug*',
        destination: '/conditions/:slug*',
        permanent: true
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true
      },
      {
        source: '/blog/:slug*',
        destination: '/blogs/:slug*',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
