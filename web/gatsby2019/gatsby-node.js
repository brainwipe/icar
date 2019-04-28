const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log("also " + node.fields.slug);
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
            })
        })
    })
  }
  