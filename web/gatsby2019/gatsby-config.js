module.exports = {
    siteMetadata: {
        title: `Icar - The Free Sci Fi Tabletop RPG`
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
        },
        `gatsby-plugin-slug`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                    resolve: `gatsby-remark-images`,
                    options: {
                        // It's important to specify the maxWidth (in pixels) of
                        // the content container as this plugin uses this as the
                        // base for generating different widths of each image.
                        maxWidth: 960,
                    },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Icar - The Free Sci Fi Tabletop RPG",
                short_name: "Icar - Free TTRPG",
                start_url: "/",
                background_color: "#000033",
                theme_color: "#ffffff",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "src/img/icon.jpg", // This path is relative to the root of the site.
        }
      },
    ]
}