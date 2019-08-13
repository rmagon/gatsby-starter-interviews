module.exports = {
  siteMetadata: {
    title: `Interviews by Smooper`,
    description: `Interviews of amazing social media managers, digital marketers and awesome startups around the world!`,
    author: `@smoopersocial`,
    siteUrl: `https://interviews.smooper.com` //needed because 'location' is not available to facebook web scraper
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-flow`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `smooper-interviews-template`,
        short_name: `interviews`,
        start_url: `/`,
        background_color: `#f6f9fc`,
        theme_color: `#377dff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXXX-Y`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        // your facebook pixel id
        pixelId: 'XXXXXXXXX',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
