const RULES = {
  ERROR: 'error',
  OFF: 'off',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': RULES.WARN,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'no-eval': RULES.OFF
  }
}
