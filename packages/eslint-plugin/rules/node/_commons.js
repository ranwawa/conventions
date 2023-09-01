module.exports = {
  commonGlobals: {
    /**  ECMAScript */
    ArrayBuffer: 'readonly',
    Atomics: 'readonly',
    BigInt: 'readonly',
    BigInt64Array: 'readonly',
    BigUint64Array: 'readonly',
    DataView: 'readonly',
    Float32Array: 'readonly',
    Float64Array: 'readonly',
    Int16Array: 'readonly',
    Int32Array: 'readonly',
    Int8Array: 'readonly',
    Map: 'readonly',
    Promise: 'readonly',
    Proxy: 'readonly',
    Reflect: 'readonly',
    Set: 'readonly',
    SharedArrayBuffer: 'readonly',
    Symbol: 'readonly',
    Uint16Array: 'readonly',
    Uint32Array: 'readonly',
    Uint8Array: 'readonly',
    Uint8ClampedArray: 'readonly',
    WeakMap: 'readonly',
    WeakSet: 'readonly',

    /** ECMAScript (experimental) */
    globalThis: 'readonly',

    /** ECMA-402 */
    Intl: 'readonly',

    /** Web Standard */
    TextDecoder: 'readonly',
    TextEncoder: 'readonly',
    URL: 'readonly',
    URLSearchParams: 'readonly',
    WebAssembly: 'readonly',
    clearInterval: 'readonly',
    clearTimeout: 'readonly',
    console: 'readonly',
    queueMicrotask: 'readonly',
    setInterval: 'readonly',
    setTimeout: 'readonly',

    /** Node.js */
    Buffer: 'readonly',
    GLOBAL: 'readonly',
    clearImmediate: 'readonly',
    global: 'readonly',
    process: 'readonly',
    root: 'readonly',
    setImmediate: 'readonly'
  },
  rules: {
    // 禁止使用废弃的API
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': ['warn'],

    // 禁止引入 package.json 中不存在的包
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    'node/no-extraneous-import': ['error'],
    'node/no-extraneous-require': ['error'],

    // 禁止直接给exports变量赋值
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    'node/no-exports-assign': ['error'],

    // 必须引入正确的路径,和import/no-unresolved重复
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-import': ['off'],
    'node/no-missing-require': ['off'],

    // 禁止使用process.exit()函数
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'node/no-process-exit': ['error'],

    // 禁止忽略bin中文件
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 'error',

    // 禁止引入私有文件
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',

    // 禁止使用不支持的 ES/node 语法
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': ['error'],
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',

    // package.json.bin中的文件才能放置shebang
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 'error'
  }
};
