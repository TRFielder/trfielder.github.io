/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
  },
};

module.exports = nextConfig;
