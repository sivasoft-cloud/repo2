module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enable Prettier plugin
  ],
  plugins: ['prettier'],
  rules: {
    // Add your custom rules here
    'prettier/prettier': 'error', // Ensure Prettier enforces formatting
    // Add other rules as needed
  },
};

