const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const configuration = {
  webpack5: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  pageExtensions: ['tsx'],
};

module.exports = withPlugins([withBundleAnalyzer], configuration);
