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
                data.values.forEach(function(bionic) {
                    this.bionicslist.push(this.mapBionic(bionic));
                }, this);
                this.trigger(this.bionicslist);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    },

    mapBionic: function(bionic) {
        var mappedBionic = {
            Name: bionic[0],
            Manufacturer: bionic[1],
            Cost: bionic[2].replace(/,/g, ""),
            Rarity: bionic[3],
            BorgOrCyber: bionic[4],
            Timing : {
                Install: bionic[5],
                Rehab: bionic[6],
                Interval: bionic[7]
            },
            Machine: bionic[8],
            Type: bionic[9],
            Requires: bionic[10],
            AugPoints: bionic[11],
            Power: bionic[12],
            AttributeChanges : {
                Battle: bionic[13],
                Meat: bionic[14],
                Shift: bionic[15],
                Soul: bionic[16],
                Wit: bionic[17],
                HitPoints: bionic[18],
                Stun: bionic[19]
            },
            Notes: bionic[20]
        };
        return mappedBionic;
    }
});

module.exports = BionicsStore;