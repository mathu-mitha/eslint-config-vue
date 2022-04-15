export default {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:vue/recommended",
    "plugin:vuejs-accessibility/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
};
