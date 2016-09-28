
// Action Types

export const FETCHALL = 'FETCHALL'
export const ADD_SYSTEM_TO_SUIT = 'ADD_SYSTEM_TO_SUIT'

export function fetchAll() {
  return { type: FETCHALL }
}

export function addSystemToSuit(index) {
  return { type: ADD_SYSTEM_TO_SUIT, index }
}
