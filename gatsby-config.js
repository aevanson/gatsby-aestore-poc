/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The Accessible eStore`,
  },
  // pathPrefix: "/repoName",
  plugins: [
    `@xavivars/gatsby-plugin-static-site`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
