module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
