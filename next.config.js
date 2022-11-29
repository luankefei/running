/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.url);
const prefix =
  process.CDN === true
    ? "https://d2dfipunm8t5y9.cloudfront.net/ingroup-official"
    : undefined;

console.log(path.resolve(__dirname, "static/avatar"));

const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    MODE: process.env.MODE,
    PUBLIC_PATH: process.env.PUBLIC_PATH,
  },
  assetPrefix: prefix,

  // TODO: 临时测试
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  webpack: (config, { dev, isServer, buildId }) => {
    return {
      ...config,
      experiments: {
        topLevelAwait: true,
        asyncWebAssembly: true, // Enable webassembly
        layers: true,
      },
      // resolve: {plugins:[PnpWebpackPlugin]},
      // resolveLoader: {
      //   plugins: [PnpWebpackPlugin.moduleLoader(module)]
      // }
    };
  },
  // TODO: 设置代理
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `http://172.31.30.249:8006/:path*`
  //     },
  //   ]
  // },
};

export default nextConfig;
