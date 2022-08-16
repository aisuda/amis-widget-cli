// 构建快应用自定义组件需要
module.exports = function(api) {
  api.cache(true);
  return {
    "presets":["@babel/preset-env"],
    "plugins":["@babel/plugin-transform-modules-commonjs"],
    "babelrcRoots": [".", "node_modules"]
  };
}