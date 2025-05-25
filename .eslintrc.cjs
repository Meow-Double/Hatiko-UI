const { eslint } = require('@meow-double/eslint');

module.exports = eslint({
  storybook: true,
  defaultRules: {
    'custom/one-component': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'off'
  }
});