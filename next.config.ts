import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isWindows = process.platform === 'win32';

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  // Next 15.5 dev overlay conflicts with HMR on Windows → webpack .call errors
  devIndicators: false,
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Default true in 15.5 — breaks React Client Manifest after HMR on Windows
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { dev }) => {
    if (dev && isWindows) {
      // Avoids corrupt .next chunks on Windows / OneDrive (ENOENT on _buildManifest.js.tmp.*)
      config.cache = { type: 'memory' };
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.git/**'],
      };
    }
    return config;
  },
};

export default nextConfig;
