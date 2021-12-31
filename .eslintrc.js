module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: 'path/to/config.js',
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@babel/eslint-parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint', 'plugin:import/typescript'],
};
