import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-wrapper pure-g">
        <article className="content pure-u-1 pure-u-md-1-2">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`