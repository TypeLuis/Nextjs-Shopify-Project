/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://stackoverflow.com/questions/66137368/next-js-environment-variables-are-undefined-next-js-10-0-5
  env: {
    'SITE': process.env.SITE
  }
}


module.exports = nextConfig
