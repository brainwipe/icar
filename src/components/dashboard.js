import React from 'react'
import { Layout, Header, Content, Navigation, Icon, Grid, Cell, Drawer } from 'react-mdl'
import Bionics from './bionics'
import $ from 'jquery'

class Dashboard extends React.Component
{

    render() {
        return (
             <Layout>
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
            </Layout>);
    }   
}

export default Dashboard