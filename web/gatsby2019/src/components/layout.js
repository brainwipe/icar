import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "./pure-min.css"
import "./main.css"

export default ({ children }) => (
    <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
        render={data => (
            <div>
                <Helmet>
                  <title>{data.site.siteMetadata.title}</title>  
                  <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"></link>
                </Helmet>
                
                {children}
            </div>
        )}
    />
)