const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const nodeExternals = require("webpack-node-externals");
const { ConcatSource } = require("webpack-sources");

class WrapperPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("WrapperPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "WrapperPlugin",
          stage: -100,
        },
        () => {
          for (const chunk of compilation.chunks) {
            if (!chunk.canBeInitial() || !chunk.rendered) {
              continue;
            }

            for (const file of chunk.files) {
              if (/.css$/.test(file)) {
                // 不包裹css文件
                continue;
              }

              const header = `(function(factory) {
                if (!window.amis) {
                  throw new Error('请在爱速搭平台中调试');
                }
                amis.on('schema-editor:loaded', function() {
                  factory(window.amisRequire);
                });
              })((function(require) {
                `;
              const footer = `}))`;

              compilation.updateAsset(
                file,
                (old) => new ConcatSource(header, old, footer)
              );
            }
          }
        }
      );
    });
  }
}

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    preview: [
      '../src/index.jsx',
      '../src/plugin.jsx',
    ],
  },
  devServer: {
    injectClient: false,
    hot: false, // enable HMR on the server
    historyApiFallback: false // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: 'hidden-source-map',
  plugins: [
    new WrapperPlugin(),
  ],
  externals: [
    nodeExternals({
      importType: 'commonjs',
      // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
      allowlist: ["jquery", "vue", "amis-widget", "antd", /^@babel/],
    }),
  ],
});
