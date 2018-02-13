import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Header, Content, Navigation,
    Icon, Grid, Cell, Drawer } from 'react-mdl';

class Dashboard extends React.Component {
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
        </Content>
    </Layout>
    }
}

ReactDOM.render(<Dashboard/>, document.getElementById('dashboard'));