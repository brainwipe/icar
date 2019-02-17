import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <ul>
                    <li>{node.frontmatter.title}</li>
                </ul>
            ))}
        </Layout>
    )
        
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
