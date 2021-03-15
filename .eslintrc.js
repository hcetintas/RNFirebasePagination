module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
  },
};
