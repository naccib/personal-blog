import createMDX from '@next/mdx';

import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-4156699f48e3436d9bc00c2a132210cb.r2.dev',
        port: '',
        pathname: '/**',
        search: '',
      }
    ]
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  }
});

export default withMDX(nextConfig);
