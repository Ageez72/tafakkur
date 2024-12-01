/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'd329sg0poh8k4h.cloudfront.net',
          port: '',
          pathname: '/tafakkur-website/**'
        }]
      },
}

module.exports = nextConfig
