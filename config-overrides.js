const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    ...config.resolve.alias,
    "@src": path.join(__dirname, "./src"),
    "@assets": path.join(__dirname, "./src/assets"),
    "@pages": path.join(__dirname, "./src/pages"),
    "@components": path.join(__dirname, "./src/components"),
    "@utils": path.join(__dirname, "./src/utils"),
  };
  return config;
};
