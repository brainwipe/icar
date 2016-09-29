import React from 'react'
import { Layout, Header, Content, Navigation, Icon, Grid, Cell, Drawer } from 'react-mdl'
import Bionics from './bionics'
import $ from 'jquery'

class Dashboard extends React.Component
{
    constructor()
    {
        super();
        this.bionicslist = [];
        
    }

    componentWillMount()
    {
        $.ajax({
            url: 'https://sheets.googleapis.com/v4/spreadsheets/1X6h9fswhywBMLG05gcyNuYwtr2Z-ZoQFzHHO4M9XObQ/values/Bionics%20Systems!A5:U43?key=AIzaSyAwr-VmpKMU7tEiaKhrmfqg7jPJ9uXCkNw',
            dataType: 'json',
            cache: false,
            context: this,
            contentType: "application/json;charset=utf-8",
            success: function(data) {
                console.log(data);
                
                data.values.forEach(function(bionic) {
                    this.bionicslist.push(this.mapBionic(bionic));
                }, this);
                
                
                // TODO - trigger a FETCHALL action on the store, passing this in
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Data Load Error" + xhr.status + " Message: " + thrownError);
            }
        });
    }

    mapBionic(bionic) {
        var mappedBionic = {
            Name: bionic[0],
            Manufacturer: bionic[1],
            Cost: bionic[2].replace(/,/g, ""),
            Rarity: bionic[3],
            BorgOrCyber: bionic[4],
            Timing : {
                Install: bionic[5],
                Rehab: bionic[6],
                Interval: bionic[7]
            },
            Machine: bionic[8],
            Type: bionic[9],
            Requires: bionic[10],
            AugPoints: bionic[11],
            Power: bionic[12],
            AttributeChanges : {
                Battle: bionic[13],
                Meat: bionic[14],
                Shift: bionic[15],
                Soul: bionic[16],
                Wit: bionic[17],
                HitPoints: bionic[18],
                Stun: bionic[19]
            },
            Notes: bionic[20]
        };
        return mappedBionic;
    }

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