module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ['airbnb'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'no-use-before-define': 'off',
        camelcase: 'off',
        'object-shorthand': 'off',
        'no-param-reassign': 'off',
        'react/jsx-curly-newline': 'off',
    },
  };
  