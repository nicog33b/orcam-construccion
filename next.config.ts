import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    minimumCacheTTL: 31536000, // 1 año
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimización de output static
  output: "standalone",

  // Optimización de build
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Configuración experimental para máximo rendimiento
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
    optimizeServerReact: true,
  },

  // Headers para caché agresivo
  headers: async () => {
    return [
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
