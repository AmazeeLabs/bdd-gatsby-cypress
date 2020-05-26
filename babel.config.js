// babel.config.js
module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        targets: {
          node: "current",
        },
      },
    ],
  ],
}
