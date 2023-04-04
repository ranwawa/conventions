const nodeModule = require('./configs/node-module');
const nodeScript = require('./configs/node-script');
const react = require('./configs/react');
const vue2 = require('./configs/vue2');
const vue3 = require('./configs/vue3');
const uniApp = require('./environments/uni-app');

module.exports = {
  configs: {
    vue2,
    vue3,
    react,
    'node-module': nodeModule,
    'node-script': nodeScript
  },
  environments: {
    'uni-app': {
      globals: uniApp
    }
  }
};
