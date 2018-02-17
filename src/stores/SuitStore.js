// This is in ES5 because Reflux 0.4.1 only supports ES5. Reflux 0.5 supports ES6 Stores
var Reflux = require('reflux');
var $ = require('jquery');
var BionicsActions = require('../actions/bionicsactions');
var BionicsStore = require('./bionicsstore');

var SuitStore = Reflux.createStore({
	listenables: BionicsActions,
	bionics: [],
	suit: {
        cost : 0,
        rehab : 0,
    },

    init: function()
    {
    	this.listenTo(BionicsStore, this.loadBionics);
    },

    loadBionics: function(storedbionics)
    {
    	this.bionics = storedbionics;
    },

    chooseSystem: function(ids)
    {
        this.resetSuit();
        for(var i in ids)
        {
            var chosenSystem = this.bionics[i];
            this.suit.cost += parseInt(chosenSystem.Cost);
        }
        console.log(this.suit);
        this.trigger(this.suit);
    },

    resetSuit: function() {
        this.suit = {
            cost : 0,
            rehab : 0,
        }
    },

});

module.exports = SuitStore;