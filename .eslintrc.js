module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  extends: ['prettier', 'prettier/@typescript-eslint'],
  parser: 'babel-eslint',
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
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      globalReturn: false,
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {},
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
};
