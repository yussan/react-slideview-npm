const webpack = require("webpack")
const Path = require("path")
const BUILD_DIR = "example/dist"

const config = {
  entry: {
    "example-1": "./example/src/example-1.js"
  },

  output: {
    path: Path.resolve(__dirname, BUILD_DIR),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },

  plugins: [new webpack.NoEmitOnErrorsPlugin()],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["es2015", "react"],
              env: {
                production: {
                  presets: []
                }
              }
            }
          }
        ]
      }
    ]
  }
}

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: {
        except: ["exports", "require"]
      },
      output: {
        comments: false
      },
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

module.exports = config
