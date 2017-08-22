module.exports = {
  name: "server code",
  entry: "./src/server.js",
  devtool: "cheap-module-source-map",
  output: {
    filename: "./dist/server.js"
  },
  target: "node",
  node: {
    __dirname: false
  }
}
