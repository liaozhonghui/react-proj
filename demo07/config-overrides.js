/* config-overrides.js */
const webpackconfig= require('./webpack.config.js');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = webpackconfig;
    return config;
  }