import { 
  UPDATE_FLIGHT_LOCATIONS, 
  UPDATE_FLIGHT_ORIGIN, 
  UPDATE_FLIGHT_DESTINATION } from '../actionTypes'

const initialState = {
  locations: [],
  origin: undefined,
  destination: undefined
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_FLIGHT_LOCATIONS:
      return handleUpdateFlightLocation(state, payload)
    case UPDATE_FLIGHT_ORIGIN:
      return handleUpdateOrigin(state, payload)
    case UPDATE_FLIGHT_DESTINATION:
      return handleUpdateDestination(state, payload)
    default:
      return state
  }
}

const handleUpdateFlightLocation = (state, locations) => {
  return {
    ...state,
    locations
  }
}

const handleUpdateOrigin = (state, origin) => {
  return {
    ...state,
    origin
  }
}

const handleUpdateDestination = (state, destination) => {
  return {
    ...state,
    destination
  }
}