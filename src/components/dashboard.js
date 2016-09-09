import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Header, Content, Navigation,
    Icon, Grid, Cell, Drawer } from 'react-mdl';
import Bionics from './bionics'

export class Dashboard extends React.Component {
    render() {
    return <Layout>
        <Header title="Icar" scroll>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Icar">
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