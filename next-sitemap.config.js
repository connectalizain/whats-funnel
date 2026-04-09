/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://whatsfunnels.io',
  generateRobotsTxt: true,
  exclude: ['/signin', '/signup'], // Exclude auth pages from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/signin', '/signup'],
      },
    ],
  },
}
