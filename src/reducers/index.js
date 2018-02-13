import { combineReducers } from 'redux'
import { FETCHALL, ADD_SYSTEM_TO_SUIT, REQUEST_BIONICS, RECEIVE_BIONICS } from '../actions'

const initialState = {
    suit: {},
    bionics: []
};


function bionics(state = {}, action) {
    switch (action.type) {
        case REQUEST_BIONICS:
          return Object.assign({}, state, {
            isFetching: true,
          })
        case RECEIVE_BIONICS:
          return Object.assign({}, state, {
            isFetching: false,
            bionics: action.bionics,
            lastUpdated: action.receivedAt
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