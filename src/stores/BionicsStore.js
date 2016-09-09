import Reflux from 'reflux';
import $ from 'jquery';
var BionicsActions = require('../actions/bionicsactions');

export default class BionicsStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = BionicsActions;
        this.bionicslist = [];
        this.sourceUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1X6h9fswhywBMLG05gcyNuYwtr2Z-ZoQFzHHO4M9XObQ/values/Bionics%20Systems!A5:A43?key=AIzaSyAwr-VmpKMU7tEiaKhrmfqg7jPJ9uXCkNw';
    }

    init() {
        this.fetchList();
    }

    fetchList() {
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
            }
        });
    }
}