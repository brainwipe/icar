import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
            <div className="blog-wrapper pure-g">
                <div className="content pure-u-1 pure-u-sm-3-4 pure-u-md-3-4 pure-u-lg-1-2">
                    <h1>Archive</h1>
                    <p>
                        Icar has been around for an exceptionally long time and has collected a lot of material that isn't up to date but might be of use to those wanting to look a little deeper.
                    </p>
                    <ul>
                        <li><Link to="archive/designers-notes">Designer's Notes</Link>. The design goals of Icar.</li>
                        <li><Link to="archive/game-history">Game History</Link>. A narrative history of when Icar began and how it evolved.</li>
                        <li><Link to="teams">Team List</Link>. An almost-complete list of all the games and teams I have run.</li>
                        <li><Link to="virtualsession">Virtual Session</Link>. A timecapsule from the year 2000, when I ran a group called The Fear.</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
