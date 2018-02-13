import React, { PropTypes } from 'react';
import { IconButton, Card, CardTitle, CardText, CardMenu, CardActions, DataTable, TableHeader } from 'react-mdl';

const BionicsSystem = ({ bionics, onHandleChoose }) => (
	<Card shadow={0} style={{width:'100%'}}>
	    <CardTitle>Endobioreorg</CardTitle>
	    <CardText>
	    	The Endobioreorg replaces the digestive system (Digestive, Lymphatic and Urinary).
	    </CardText>
	    <CardActions border>
	        <DataTable
        		selectable
        		onSelectionChanged={onHandleChoose}
    			rowKeyColumn="id"
			    rows={bionics}
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
)

BionicsSystem.propTypes = {
	bionics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onHandleChoose: PropTypes.func.isRequired
}

export default BionicsSystem;
