module.exports = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties'
  ],
  extends: [
    'stylelint-config-idiomatic-order',
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  rules: {
    'no-duplicate-selectors': false,
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/declaration-block-no-ignored-properties': true,
  },
};
