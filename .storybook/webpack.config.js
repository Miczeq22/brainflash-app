const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@theme': path.resolve(__dirname, '..', 'src', 'theme'),
    '@ui': path.resolve(__dirname, '..', 'src', 'ui'),
    '@assets': path.resolve(__dirname, '..', 'src', 'assets'),
    '@api': path.resolve(__dirname, '..', 'src', 'api'),
    '@hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
    '@context': path.resolve(__dirname, '..', 'src', 'context'),
  };

  return config;
};
