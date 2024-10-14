module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath:	`/blog`,
        contentPath: `content/posts`,
        assetPath: `content/assets`,
        mdx: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {

            },
          }
        ],
        remarkPlugins: [
          require("remark-capitalize"),
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Falcon Dai`,
        short_name: `Falcon Dai`,
        description: `The personal website and blog of Falcon Dai.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0077cc`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: `https://falcond.ai`,
    title: `Falcon Dai`,
    titleTemplate: `%s | Falcon Dai`,
    author: `Falcon Dai`,
    authorTwitter: `@falcondai`,
    description: `The personal website and blog of Falcon Dai.`,
    social: [
      {
        name: `x`,
        url: `https://x.com/falcondai`,
      },
      {
        name: `github`,
        url: `https://github.com/falcondai`,
      },
    ],
  },
}
