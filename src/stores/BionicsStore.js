// This is in ES5 because Reflux 0.4.1 only supports ES5. Reflux 0.5 supports ES6 Stores
var Reflux = require('reflux');
var $ = require('jquery');
var BionicsActions = require('../actions/bionicsactions');

var BionicsStore = Reflux.createStore({
    
    listenables: BionicsActions,
    bionicslist: [],
    sourceUrl: 'https://sheets.googleapis.com/v4/spreadsheets/1X6h9fswhywBMLG05gcyNuYwtr2Z-ZoQFzHHO4M9XObQ/values/Bionics%20Systems!A5:U43?key=AIzaSyAwr-VmpKMU7tEiaKhrmfqg7jPJ9uXCkNw',

    init: function() {
        this.fetchList();
    },
 
    fetchList: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'json',
            jsonpCallback: 'jsonBionics',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.bionicslist = data.items;
                this.trigger(this.bionicslist);
                console.log(data);
            }
        });
    }
});