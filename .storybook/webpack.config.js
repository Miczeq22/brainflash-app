const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@theme': path.resolve(__dirname, '..', 'src', 'theme'),
    '@ui': path.resolve(__dirname, '..', 'src', 'ui'),
    '@assets': path.resolve(__dirname, '..', 'src', 'assets'),
  };

  return config;
};
