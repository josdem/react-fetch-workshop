module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended"],
  ignorePatterns: ["build/"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y"],
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-body-style": ["error", "as-needed"],
    "react/function-component-definition": "off",
  },
};
