const { injectBabelPlugin } = require("react-app-rewired");
const rewireCssModules = require("react-app-rewire-css-modules");
const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  //启用ES7的修改器语法（babel 7）
  // config = injectBabelPlugin(
  //   ["@babel/plugin-proposal-decorators", { legacy: true }],
  //   config
  // );
  //css模块化
  config = rewireCssModules(config, env);

  //antd按需加载
  // config = injectBabelPlugin(
  //   ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
  //   config
  // );

  // 别名配置
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
