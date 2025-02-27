const { getDefaultConfig } = require("expo/metro-config");

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs"], // Add 'cjs' if you need
  },
};
