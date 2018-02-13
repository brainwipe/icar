
// Action Types

export const REQUEST_BIONICS = 'REQUEST_BIONICS'
export const RECEIVE_BIONICS = 'RECEIVE_BIONICS'
export const FETCHALL = 'FETCHALL'
export const ADD_SYSTEM_TO_SUIT = 'ADD_SYSTEM_TO_SUIT'

export function requestBionics() {
  return {
    type: REQUEST_BIONICS
  }
}

export function receiveBionics(json) {
  return {
    type: RECEIVE_BIONICS,
    bionics: json.map(mapBionic),
    receivedAt: Date.now()
  }
}

export function fetchAll() {
    return dispatch => {
        dispatch(requestBionics())
            return fetch("https://sheets.googleapis.com/v4/spreadsheets/1X6h9fswhywBMLG05gcyNuYwtr2Z-ZoQFzHHO4M9XObQ/values/Bionics%20Systems!A5:U43?key=AIzaSyAwr-VmpKMU7tEiaKhrmfqg7jPJ9uXCkNw")
                .then(response => response.json())
                .then(json => dispatch(receiveBionics(json)))
  }
}

export function addSystemToSuit(index) {
  return { type: ADD_SYSTEM_TO_SUIT, index }
}


function mapBionic(bionic) {
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