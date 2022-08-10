module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true, // Allows Create React App to detect process.env.NODE_ENV at compile time
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@babel/eslint-parser', // Included to allow arrow functions as class methods.
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'simple-import-sort'],
  rules: {
    semi: ['error'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'max-len': 'off',
    indent: 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'prefer-destructuring': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/sort-prop-types': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-dupe-keys': 'off',
    camelcase: 'off',
    eqeqeq: 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': ['warn', 'as-needed'],
    quotes: ['error', 'single'],
    'comma-dangle': [0, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Included to allow js files to contain jsx code.
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'dot-notation': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': [0, 'always'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        noSortAlphabetically: false,
        callbacksLast: true,
        reservedFirst: true,
        ignoreCase: true
      }
    ],
    'react/sort-comp': [
      'warn',
      {
        order: [
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^on.+$/',
          '/^render.+$/',
          'render'
        ]
      }
    ],
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb',],
  overrides: [
    {
      files: [
        '*.+(js|jsx)'
      ],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
              ],
              // React
              [
                '^react'
              ],
              //  // UI kit.
              //  [
              //   "^@react-ui-kit"
              // ],
              // UI kit.

              // Packages.
              [
                '^@?\\w'
              ],
              // Style imports including styles of other packages
              [
                '.*css$'
              ],
              // Side effect imports.fe

              // Relative imports, put parent imports last
              [
                '^\\./(?=.*/)(?!/?$)',
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$'
              ],
              // Folders imports.
              [
                '.*partials.*',
                '^\\.(?!/?$)',
                '^\\./?$'
              ]
            ]
          }]

      }
    }]
};
