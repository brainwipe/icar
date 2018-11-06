import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>

    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
