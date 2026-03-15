/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization enabled for better performance (requires a supporting host like Vercel)
  // If deploying to a static-only host, you may need to re-enable unoptimized: true
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
