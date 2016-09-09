var React = require('react');
var Reflux = require('reflux');
var BionicsStore = require('../stores/bionicsstore');
var BionicsActions = require('../actions/bionicsactions');

var Bionics = React.createClass({
    mixins: [Reflux.connect(BionicsStore, 'bionicsstore')],

    render: function() {
        var rows = [];

        if (this.state.bionicsstore)
        {
            this.state.bionicsstore.forEach(function(bionic) {
                rows.push(bionic[0]);
            });
        }

        return (
            <pre>
              {rows}
            </pre>
            ); 
    }
});

module.exports = Bionics;