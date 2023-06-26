module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'screen'],
      },
    ],
  },
}
