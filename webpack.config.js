const path = require('path')

const common = {
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: './.eslintrc.json',
          cache: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  }
}

const umd = Object.assign({}, common, {
  entry: {
    'lib': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/umd'),
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Lib',
    libraryTarget: 'umd'
  }
})

const commonjs2 = Object.assign({}, common, {
  entry: {
    'lib': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/common'),
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Lib',
    libraryTarget: 'commonjs2'
  }
})

module.exports = [
  umd,
  commonjs2
]
