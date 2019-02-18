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
        `gatsby-transformer-remark`,
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
    ]
}