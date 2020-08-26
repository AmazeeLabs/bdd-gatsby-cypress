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
  plugins:
    // When transpiling for Jest (NODE_ENV === 'test') we don't need additional
    // plugins. For Cypress, we do.
    process.env.NODE_ENV !== "test"
      ? [`@babel/plugin-proposal-class-properties`, "istanbul"]
      : [],
}
