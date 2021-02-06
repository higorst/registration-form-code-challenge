module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      'babel-preset-expo',
      '@babel/preset-typescript',
    ],
    plugins: [
      "@babel/plugin-transform-flow-strip-types",
      "@babel/plugin-proposal-class-properties"
    ]
  }
}