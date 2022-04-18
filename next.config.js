const relay = require('./relay.config.js');

module.exports = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: 'typescript',
    },
    externalDir: true,
  },
  experimental: {
    runtime: 'nodejs',
    concurrentFeatures: true,
  },
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },
};
