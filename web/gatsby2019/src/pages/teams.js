import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
          <div className="blog-wrapper pure-g">
            <div className="content pure-u-1 pure-u-sm-3-4 pure-u-md-3-4 pure-u-lg-1-2">
            <h1>Teams</h1>
            <p>
            This page is dedicated to all those people who have played Icar with me throughout the years. They've stuck with it even through a hundred character sheet changes, seizmic rule changes and long absences.
            </p>

            <p>
            To you, dear players, thank you.
            </p>
            </div>
          </div>

          {data.allTeamsJson.edges.map(({ node }) => (

          <div className="team blog-wrapper pure-g">
            <div className="content pure-u-1 pure-u-sm-3-4 pure-u-md-3-4 pure-u-lg-1-2">
            
              <section key={node.id}>
                <header>
                  <h2>{node.name}</h2>
                </header>
                  <p>
                    {node.information.ooc}
                  </p>
                  <p>
                    {node.information.ic}
                  </p>
                  
                  <table className="pure-table">
                    <caption hidden>Stats about the player group: dates, location and so on.</caption>
                    <thead>
                      <tr>
                        <th>Dates</th>
                        <th>In-game Dates</th>
                        <th>GM</th>
                        <th>Location</th>
                        <th>Rule Version</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>
                            {node.realTime.start} - {node.realTime.end}
                          </td>
                          <td>
                            {node.imperialStandardTime.start} - {node.imperialStandardTime.end}
                          </td>
                          <td>
                            {node.gamesmaster}
                          </td>
                          <td>
                            {node.location}
                          </td>
                          <td>
                            {node.ruleVersion}
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h2>Characters</h2>

                  {node.playerCharacters.map(( pc, i ) => (
                    <div key={i} className="character">
                      <h3>{pc.name}</h3>
                      <em>played by</em> <strong>{pc.player}</strong>
                      <p>
                        {pc.information}
                      </p>

                      <dl>
                        <dt>Type</dt>
                        <dd>{pc.type}</dd>
                        <dt>Humanity</dt>
                        <dd>{pc.humanity}</dd>
                        <dt>Genus</dt>
                        <dd>{pc.genus}</dd>
                        <dt>Speciality</dt>
                        <dd>{pc.speciality}</dd>
                        <dt>Living</dt>
                        <dd>{pc.living}</dd>
                      </dl>
                      <hr/>
                    </div>
                  ))}

              </section>
            </div>
          </div>

          ))}
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
                imperialStandardTime {
                  start
                  end
                }
                realTime {
                  start
                  end
                }
                gamesmaster
                location
                ruleVersion
                information {
                  ooc
                  ic
                }
                playerCharacters {
                  name
                  player
                  type
                  humanity
                  genus
                  speciality
                  information
                  living
                }
            }        
        }
    }
  }
`
