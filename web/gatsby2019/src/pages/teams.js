import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
          <div className="blog-wrapper pure-g">
            <div className="content pure-u-1 pure-u-sm-3-4 pure-u-md-1-2">
            <h1>Teams</h1>
            {data.allTeamsJson.edges.map(({ node }) => (
              <section key={node.id}>
                <header>
                  <h2>{node.name}</h2>
                  <p>{node.realTime.start}</p>
               </header>
                <div>
                  <p></p>
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
    allTeamsJson {
        edges {
            node {
                name
                id
                realTime {
                    start
                    end
                }
            }        
        }
    }
  }
`
