import { UPDATE_FLIGHT_MEMBERS } from './../actionTypes'

const initialState = {
  adults: 1,
  children: 0,
  infants: 0,
  total: 1
}

export default (state=initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case UPDATE_FLIGHT_MEMBERS:
      return handleUpdateFlightMembers(state, payload)
    default:
      return state
  }
}

const handleUpdateFlightMembers = (state, flightMembers) => {
  const currentState = {
    ...state,
    ...flightMembers,
  }

  const { adults, children, infants } = currentState
  currentState.total = adults + children + infants
  
  return {
    ...currentState
  }
}