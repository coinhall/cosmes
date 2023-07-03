/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    /**
     * Should be last in this array to override other configs
     * @see https://github.com/prettier/eslint-config-prettier#installation
     */
    "prettier",
  ],
  rules: {
    // Remove errors for unused args/vars starting with underscore
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    // Remove errors for intentional empty functions
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["private-constructors", "protected-constructors"],
      },
    ],
  },
};
