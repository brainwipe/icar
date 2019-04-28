import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
          <div className="blog-wrapper pure-g">
            <div className="content pure-u-1 pure-u-sm-3-4 pure-u-md-1-2">
            <h1>Blogs</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <section key={node.frontmatter.slug}>
                <header>
                  <h2><Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
                  <p>{node.frontmatter.date}</p>
               </header>
                <div>
                  <p>{node.excerpt} <Link to={`/${node.frontmatter.slug}`}>more...</Link></p>
               </div>
              </section>
              ))}
            </div>
          </div>
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
            date(formatString: "Do MMMM YYYY")
            slug
          }
          excerpt(pruneLength:250)
        }
      }
    }
  }
`
