/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Polyfill localStorage pour le serveur
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  allowedDevOrigins: ['192.168.1.65', 'localhost'],
};

export default nextConfig;
