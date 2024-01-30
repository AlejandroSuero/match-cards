module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json"
  },
  plugins: [
    "react"
  ],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "react/jsx-indent": "off",
    "react/react-in-jsx-scope": "off"
  }
};
