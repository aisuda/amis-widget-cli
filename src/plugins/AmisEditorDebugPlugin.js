const { ConcatSource } = require('webpack-sources');
class WrapperPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('WrapperPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'WrapperPlugin',
          stage: -100
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

              // const isPlugin = /^plugin.js$/.test(file);

              const eventHeader = `(function(factory) {
                if (!window.amis) {
                  throw new Error('请在爱速搭平台中调试');
                }
                amis.on('schema-editor:loaded', function() {
                   factory(window.amisRequire);
                });
              })((function(require) {
                `;

              const Header = `(function(factory) {
                if (!window.amis) {
                  throw new Error('请在爱速搭平台中调试');
                }
                factory(window.amisRequire);
              })((function(require) {
                `;

              const footer = `}))`;

              compilation.updateAsset(file, (old) => new ConcatSource(eventHeader, old, footer));
            }
          }
        }
      );
    });
  }
}
module.exports = WrapperPlugin;
