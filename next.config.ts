import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Set the basePath to '/landing' in production (GH pages hosting location), otherwise no basePath
  basePath: isProd ? '/landing' : '',
};;

export default nextConfig;
