// shared config (dev and prod)
const {resolve} = require('path');
const path = require("path");

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css']
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        // 图片资源
        /*
          url-loader 功能类似于 file-loader，在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
         */
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 //data转成url的条件，也就是转成bas64的条件,maxSize相当于limit
          }
        },
        generator: {
          // filename，和output中设置assetModuleFilename一样，将资源打包至img文件夹
          filename: path.posix.join('img/[name].[hash:7][ext]') //[name]指原来的名字，[hash:6]取哈希的前六位，[ext]指原来的扩展名
        }
      },
      {
        // 视频音频资源
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 //data转成url的条件，也就是转成bas64的条件,maxSize相当于limit
          }
        },
        generator: {
          // filename，和output中设置assetModuleFilename一样，将资源打包至imgs文件夹
          filename: path.posix.join('media/[name].[hash:7][ext]') //[name]指原来的名字，[hash:6]取哈希的前六位，[ext]指原来的扩展名
        }
      },
      {
        // 字体资源
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 //data转成url的条件，也就是转成bas64的条件,maxSize相当于limit
          }
        },
        generator: {
          // filename，和output中设置assetModuleFilename一样，将资源打包至fonts目录中
          filename: path.posix.join('fonts/[name].[hash:7][ext]') //[name]指原来的名字，[hash:6]取哈希的前六位，[ext]指原来的扩展名
        }
      },
    ]
  },
  externals: {},
  performance: {
    hints: false
  }
};
