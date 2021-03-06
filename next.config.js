/** @type {import('next').NextConfig} */
module.exports = {
  // swc replacing terser for minifcation
  swcMinify: true,
  // experimental: {
  //   esmExternals: true,
  // },
  // React Strict Mode is a development mode only feature for
  // highlighting potential problems in an application.
  // It helps to identify unsafe life cycles, legacy API usage,
  // and a number of other features.
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
