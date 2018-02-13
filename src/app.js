import React from 'react'
import Dashboard from './components/dashboard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import bionicsApp from './reducers'
import { render } from 'react-dom'
import DashboardData from './containers/dashboarddata'



let store = createStore(bionicsApp)

render(
    <Provider store={store}>
        <DashboardData>
        </DashboardData>
    </Provider>, 
    document.getElementById('dashboard')
    )
    
