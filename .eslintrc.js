module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
