const glslify = require('rollup-plugin-glslify');
const glsl_plugin = require('rollup-plugin-glsl');
const remsolve = require( 'rollup-plugin-node-resolve');
const comonjs = require( 'rollup-plugin-commonjs');
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
      const glsl = glsl_plugin({
          include: './src/**/*.glsl',
          sourceMap: true,
          compress: false
        });
      config.plugins= [remsolve(),comonjs(),glsl].concat(config.plugins)
      return config; // always return a config.
    },
  };