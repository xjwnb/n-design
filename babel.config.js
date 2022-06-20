module.exports = {
  presets:[
    ['@babel/preset-env', {targets: {node: 'current'}}],
      "@babel/preset-react",
      "@babel/preset-typescript"
  ],
  plugins: ["transform-es2015-modules-commonjs"]
}