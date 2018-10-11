const path = require("path");

module.exports = {
  context: __dirname,
  entry: [
    "regenerator-runtime/runtime",
    path.join(__dirname, "frontend", "slang.jsx")
  ],
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  devtool: "source-map"
};

//
// module.exports = {
//   module: {
//     loaders: [
//       { test: /\.css$/, loader: "style-loader!css-loader" },
//       // ...
//     ]
//   }
// };
