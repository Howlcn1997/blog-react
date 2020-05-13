const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    ...config.resolve.alias,
    "@src": path.join(__dirname, "./src"),
  };
  return config;
};
