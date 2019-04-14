import React from "react"
import Menu from "./menu"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "./pure-min.css"
import "./main.css"
import "./grids-responsive.min.css"

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
                  <meta name="description" content="Icar is a free science fiction tabletop roleplaying game. Zip between the stars, battle killer Droids and subvert a benevolent Imperium. Download the PDF for free now."/>
                  <html lang="en" />
                </Helmet>
                <Menu/>      
                {children}
            </div>
        )}
    />
)