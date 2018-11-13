const config = require('./src/data/siteConfig');

const plugins = [
  'gatsby-plugin-netlify',
  'gatsby-plugin-fela',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-manifest',
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    },
  },
];

if (
  config.googleAnalytics.trackingCode &&
  config.googleAnalytics.trackingCode.length > 0
) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: config.googleAnalytics.trackingCode,
    },
  });
}

module.exports = plugins;
