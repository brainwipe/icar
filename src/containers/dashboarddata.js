import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addSystemToSuit } from '../actions'
import Dashboard from '../components/dashboard'

class DashboardData extends Component {
    componentDidMount()
    {
        dispatch(fetchAll())
    }

    render()
    {
        return (
        <Dashboard>
        </Dashboard>)
        
    }
}

function mapStateToProps(state) {
      return {
        bionics: state.bionics
      }
}

export default connect(mapStateToProps)(DashboardData)
