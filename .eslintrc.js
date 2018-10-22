module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['react-native', 'airbnb'],
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react-native/no-color-literals': 0,
    'react/prop-types': 0,
    'no-use-before-define': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'react/prefer-stateless-function': 0,
    'arrow-parens': 0,
    'max-len': ["error", { "code": 120 }]
  }
};
