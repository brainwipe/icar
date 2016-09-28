import { combineReducers } from 'redux'
import { FETCHALL, ADD_SYSTEM_TO_SUIT } from '../actions'

const initialState = {
    suit: {},
    bionics: []
};

function bionics(state = {}, action) {
    switch (action.type) {
        case FETCHALL:
            return Object.assign({}, state, {
                bionics: []
                // TODO update the list of bionics

            })
        case ADD_SYSTEM_TO_SUIT:
            return Object.assign({}, state, {
                suit: { hi: "yes" }
            })

        default:
            return state
    }   
}

const bionicsApp = combineReducers({
  bionics
})

export default bionicsApp