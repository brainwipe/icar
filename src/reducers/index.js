"use strict";
const initialState = {
    suit: {},
    bionics: []
};

function bionicsApp(state = initialState, action) {
    switch (action.type) {
        case FETCHALL:
            return Object.assign({}, state, {
                bionics: []
                // set something in here

            });
        default:
            return state
    }   
}
