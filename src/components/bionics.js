var React = require('react');
var Reflux = require('reflux');
var BionicsStore = require('../stores/bionicsstore');
var BionicsActions = require('../actions/bionicsactions');
import { DataTable, TableHeader } from 'react-mdl';

var Bionics = React.createClass({
    mixins: [Reflux.connect(BionicsStore, 'bionicsstore')],



    render: function() {
        var rows = [];

        if (this.state.bionicsstore)
        {
            rows = this.state.bionicsstore;
        }

        return (
        	<DataTable
    			shadow={0}
    			rowKeyColumn="id"
			    rows={rows}
			>
			    <TableHeader name="Name" tooltip="Name">Name</TableHeader>
			    <TableHeader name="Type" tooltip="Type">Type</TableHeader>
			    
			</DataTable>
            ); 
    }
});

module.exports = Bionics;