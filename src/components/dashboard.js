import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Layout, Header, Content, Navigation,
    Icon, Grid, Cell, Drawer } from 'react-mdl'
import Bionics from './bionics'
import bionicsApp from '../reducers'

let store = createStore(bionicsApp)

export class Dashboard extends React.Component {
    render() {
    return <Layout>
        <Header title="Icar" scroll>
            <Navigation>
                <a href="http:\/\/www.icar.co.uk">Home</a>
            </Navigation>
        </Header>
        <Drawer title="Icar">
            <Navigation> 
                <a href="http:\/\/www.icar.co.uk">Home</a>
            </Navigation>
        </Drawer>
        <Content style={{width: '80%', margin: 'auto'}}>
            <Bionics>
            </Bionics>
        </Content>
    </Layout>
    }
}

render(
    <Provider store={store}>
        <dashboard/>
    </Provider>
    , document.getElementById('dashboard')); 