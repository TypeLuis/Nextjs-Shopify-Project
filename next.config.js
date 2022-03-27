/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_FRONT_ACCESS_TOKEN: 'a6d5f971db750866a35ec6a05f466445',

    SHOPIFY_STORE_DOMAIN:
      'first-test-next.myshopify.com'
  },
}


module.exports = nextConfig
