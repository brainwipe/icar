import React from "react"
import Layout from "../components/layout"

export default ({data}) => (
    <Layout>
        {data.site.siteMetadata.title}
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

