module.exports = {
  env: { browser: true, es6: true, jasmine: true },
  plugins: ['angular'],
  extends: ['eslint:recommended', 'plugin:angular/johnpapa'],
  rules: {
    'angular/di':                    ['error', '$inject'],
    'angular/controller-as':         'error',
    'angular/controller-as-vm':      ['error', 'vm'],
    'angular/no-service-method':     'off',
    'angular/file-name':             'off',
    'no-console':                    ['warn', { allow: ['warn', 'error'] }],
    'strict':                        ['error', 'function'],
    'no-unused-vars':               'error',
    'no-undef':                     'error'
  },
  globals: {
    angular:           'readonly',
    Promise:           'readonly',
    __API_BASE_URL__:  'readonly',
    __WS_BASE_URL__:   'readonly',
    __BUILD_VERSION__: 'readonly',
    __NODE_ENV__:      'readonly'
  },
  overrides: [
    {
      // webpack entry point — CommonJS + webpack-specific globals, not Angular source
      files: ['src/main.js'],
      env:   { node: true, browser: true },
      rules: {
        'angular/di':             'off',
        'angular/window-service': 'off',
        'angular/no-run-logic':   'off',
        'strict':                 'off',
        'no-undef':               'off'
      }
    }
  ]
};
