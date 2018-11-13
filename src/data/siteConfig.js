const siteUrl = process.env.SITE_URL
  ? process.env.SITE_URL
  : 'https://jondeaves.me';

module.exports = {
  meta: {
    author: 'Jon Deaves',
    description: process.env.SITE_DESCRIPTION,
    title: process.env.SITE_TITLE,
    siteUrl,
  },

  // Prefixes all links
  pathPrefix: '/',

  rss: {
    // Path to RSS feed, appended to siteUrl
    path: '/rss.xml',
  },

  // The FQDN of the site; deployed or local
  siteUrl,

  googleAnalytics: {
    trackingCode: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
  },
};
