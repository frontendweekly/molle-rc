module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'security',
    'jest',
    'jest-formatting',
    'jest-dom',
    'testing-library',
    'cypress',
    'sonarjs',
    'chai-friendly',
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/dom',
    'plugin:cypress/recommended',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'plugin:compat/recommended',
    'plugin:sonarjs/recommended',
    'plugin:regexp/recommended',
    'prettier',
  ],
  rules: {
    'chai-friendly/no-unused-expressions': 'off',
    'testing-library/prefer-screen-queries': 'warn',
    // These rules check if your package requires devDependencies. These rules
    // are useful if you're publishing a package to npm but we're not, we're
    // building an application and we require devDependencies in a lot of
    // places. For our use case it makes sense to disable this rule.
    // Read more: https://github.com/mysticatea/eslint-plugin-node/issues/47
    'node/no-unpublished-require': 'off',
    'node/no-unpublished-import': 'off',
    // Even though we target Node v14 (and v12 also supported modules), eslint
    // still complains that modules are not yet supported.
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'],
      },
    ],
  },
};
