import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Verificado: el proyecto compila con estas comprobaciones activadas.
  // Dejarlas en true hacía que se desplegaran errores de tipos y lint sin avisar.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false, // Permitir optimización
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
};

export default nextConfig;
