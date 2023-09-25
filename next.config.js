const path = require("path")

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cryptocompare.com", "vhv.rs"],
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.join(__dirname, "components"),
      "@utils": path.join(__dirname, "utils"),
      "@helpers": path.join(__dirname, "helpers"),
      "@hooks": path.join(__dirname, "hooks"),
    }

    return config
  },
}
