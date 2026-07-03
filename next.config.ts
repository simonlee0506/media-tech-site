import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.media-tech.ca',
      },
    ],
  },
  // Cloudflare Pages 兼容配置
  output: 'standalone',
  // 静态导出优化
  trailingSlash: false,
};

export default withNextIntl(nextConfig);