import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/portfolio_next_js',      
  assetPrefix: '/portfolio_next_js/',  
};

export default nextConfig;
