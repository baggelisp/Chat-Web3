/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.dicebear.com'
    ]
  },
  env: {
    NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL
  }
}
