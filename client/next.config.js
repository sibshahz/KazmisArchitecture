/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_URL:process.env.API_URL,
    // API_KEY: process.env.API_KEY,
    // AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    // PROJECT_ID: process.env.PROJECT_ID,
    // STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    // MESSAGE_ID: process.env.MESSAGE_ID,
    // APP_ID: process.env.APP_ID,
    // MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
}

module.exports = nextConfig