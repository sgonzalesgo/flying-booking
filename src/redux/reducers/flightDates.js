import { UPDATE_FLIGHT_DATES, UPDATE_FLIGHT_TYPE } from '../actionTypes'

const initialState = {
  start: undefined,
  end: undefined,
  isOneWay: false,
}

export default (state=initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case UPDATE_FLIGHT_DATES:
      return handleUpdateFlightDates(state, payload)
    case UPDATE_FLIGHT_TYPE:
      return handleUpdateFlightType(state, payload)
    default:
      return state
  }
}

const handleUpdateFlightDates = (state, flightDates) => {
  return {
    ...state,
    ...flightDates
  }
}

const handleUpdateFlightType = (state, isOneWay) => {
  return {
    ...state,
    isOneWay
  }
}