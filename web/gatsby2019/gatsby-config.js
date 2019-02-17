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
    ]
}