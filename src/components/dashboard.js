import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import { Layout, Header, Content, Navigation,
    Icon, Grid, Cell, Drawer } from 'react-mdl';
import Bionics from './bionics'

export class Dashboard extends Reflux.Component {
    render() {
    return <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation> 
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Bionics>
            </Bionics>
        </Content>
    </Layout>
    }
}

ReactDOM.render(<Dashboard/>, document.getElementById('dashboard')); 