/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "ukctpgutqywmhmykntls.supabase.co"
    ]
  }
}

module.exports = nextConfig
