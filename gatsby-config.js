// Must come first to ensure it's loaded before site config
require('dotenv').config();

const config = require('./src/data/siteConfig');
const plugins = require('./plugins');

module.exports = {
  siteMetadata: config.meta,
  pathPrefix: config.pathPrefix,
  plugins: plugins,
};
