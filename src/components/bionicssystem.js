var React = require('react');
var BionicsActions = require('../actions/bionicsactions');
import { IconButton, Card, CardTitle, CardText, CardMenu, CardActions, DataTable, TableHeader } from 'react-mdl';

var BionicsSystem = React.createClass({

	handleChoose: function(ids) {
		BionicsActions.chooseSystem(ids);
	},

    render: function() {
    	return (
    		<Card shadow={0} style={{width:'100%'}}>
			    <CardTitle>Endobioreorg</CardTitle>
			    <CardText>
			    	The Endobioreorg replaces the digestive system (Digestive, Lymphatic and Urinary).
			    </CardText>
			    <CardActions border>
			        <DataTable
		        		selectable
		        		onSelectionChanged={this.handleChoose}
		    			rowKeyColumn="id"
					    rows={this.props.bionics}
					    style={{width:"100%"}}
					>
					    <TableHeader name="Name" tooltip="Name">Name</TableHeader>
					    <TableHeader name="Type" tooltip="Type">Type</TableHeader>
					    
					</DataTable>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>
    	);
    }
});

module.exports = BionicsSystem;
