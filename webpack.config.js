module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    laoders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
