var React = require('react');
var BionicsStore = require('../stores/bionicsstore');
var BionicsActions = require('../actions/bionicsactions');
var BionicsSystem = require('./bionicssystem');
var BionicsSuit = require('./bionicssuit');
import { Grid, Cell } from 'react-mdl';

var Bionics = React.createClass({

    render: function() {
        var rows = [];
        var endobioreorg = [];
        
        if (this.state.bionicsstore)
        {
            rows = this.state.bionicsstore;
            endobioreorg = this.state.bionicsstore.filter(function(value) { return value.Type == "Endobioreorg" });
        }

        return (
		 	<Grid className="demo-grid-1">
				<Cell col={12}>
					<BionicsSuit>
		 			</BionicsSuit>
		 		</Cell>
		 			
		        <Cell col={4}>
					<BionicsSystem bionics={endobioreorg}>
					</BionicsSystem>
		        </Cell>
		        <Cell col={4}>
		        </Cell>
		        <Cell col={4}>
		        </Cell>
	        </Grid>
        	
            ); 
    }
});

module.exports = Bionics;