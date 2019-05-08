module.exports = {
    siteMetadata: {
        title: `Icar - The Free Sci Fi Tabletop RPG`,
        description: `The free Sci Fi Tabletop RPG`,
        siteUrl: `http://www.icar.co.uk`
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
        `gatsby-transformer-json`,
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
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
              feeds: [
                {
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                    return allMarkdownRemark.edges.map(edge => {
                      return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.excerpt,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [{ "content:encoded": edge.node.html }],
                      })
                    })
                  },
                  query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                            }
                          }
                        }
                      }
                    }
                  `,
                  output: "/rss.xml",
                  title: "Your Site's RSS Feed",
                },
              ],
            },
        }
    ]
}