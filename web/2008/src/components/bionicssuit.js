var React = require('react');
var SuitStore = require('../stores/suitstore');
import { IconButton, Card, CardTitle, CardText, CardMenu, CardActions, DataTable, TableHeader } from 'react-mdl';

var BionicsSuit = React.createClass({
	numberWithCommas: function (x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},

    render: function() {
    	var suit = [];

		if (this.state.suitstore)
        {
        	suit.push(this.state.suitstore);
        }

    	return (
    		<Card shadow={0} style={{width:'100%'}}>
			    <CardTitle>Bionics Suit</CardTitle>
			    <CardText>
		    		<DataTable
			    		shadow={0}
			    		rows ={suit}
			    		rowKeyColumn="id"
					>
						<TableHeader
						 	numeric 
						 	cellFormatter={(cost) => this.numberWithCommas(cost)} 
						 	name="cost" 
						 	tooltip="Running cost of the bionics in Imperial Credits" >
						 	Cost
						 </TableHeader>
		    		</DataTable>
	    		</CardText>
    		</Card>
    	);
    }
});

module.exports = BionicsSuit;
 