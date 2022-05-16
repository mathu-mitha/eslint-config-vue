module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:vue/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  rules: {
    "vue/camelcase": ["error"],
  },
};
