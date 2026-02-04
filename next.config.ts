import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true, // causes double render on component mount (dev)

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                pathname: '/**', // Permite qualquer caminho de imagem dentro desse domínio
            },
        ],
    },
}

export default nextConfig
