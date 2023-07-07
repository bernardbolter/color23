/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["thefilterman.de"],
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
