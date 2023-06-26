module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:perfectionist/recommended-natural',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
  },
}
