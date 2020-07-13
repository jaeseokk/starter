module.exports = {
  presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
  ],
  env: {
    test: {
      presets: [[
        '@babel/preset-env', {
          debug: true
        }
      ]]
    }
  }
}
