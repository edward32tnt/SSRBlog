const path = require('path')
const componentsPath = path.join(__dirname, 'components')
const pagesPath = path.join(__dirname, 'pages')
const serverPath = path.join(__dirname, 'server.js')

module.exports = {
  webpack: (config, { dev }) => {

    if (dev) {
      config.module.rules = [].concat([ {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
          failOnError: true,
        },
      } ], config.module.rules)
    }
    return config
  },
  // webpackDevMiddleware: (config) => {
  //   config.quiet = false
  //   config.module.rules.insert(0, {
  //     enforce: "pre",
  //     test: /\.js/,
  //     loader: 'eslint-loader',
  //     include: [componentsPath, pagesPath, serverPath],
  //     query: { },
  //   })
  //   return config
  // }
}
