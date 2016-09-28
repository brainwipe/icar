var React = require('react');
var BionicsList = require('../containers/bionicslist');
import { Grid, Cell } from 'react-mdl';

var Bionics = React.createClass({

    render: function() {

        return (
		 	<Grid className="demo-grid-1">
				<Cell col={12}>
					
		 		</Cell>
		 			
		        <Cell col={4}>
					<BionicsList>
					</BionicsList>
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