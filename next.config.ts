import type { NextConfig } from 'next';

import './src/lib/env/client';
import './src/lib/env/server';

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
