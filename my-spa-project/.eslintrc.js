

export default {
  env: {
    browser: true,
    es2021: true,
    node: true, // Добавьте эту строку
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
  
    // Ваши правила
  },
};
