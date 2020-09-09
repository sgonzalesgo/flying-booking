import { 
  UPDATE_FLIGHT_LOCATIONS, 
  UPDATE_FLIGHT_ORIGIN,
  UPDATE_FLIGHT_DESTINATION,
  UPDATE_FLIGHT_MEMBERS, 
  UPDATE_FLIGHT_DATES,
  UPDATE_FLIGHT_TYPE } from './actionTypes'

export const updateFlightLocations = (content) => {
  return {
    type: UPDATE_FLIGHT_LOCATIONS,
    payload: content
  }
}

export const updateFlightOrigin = (content) => {
  return {
    type: UPDATE_FLIGHT_ORIGIN,
    payload: content
  }
}

export const updateFlightDestination = (content) => {
  return {
    type: UPDATE_FLIGHT_DESTINATION,
    payload: content
  }
}

export const updateFlightMembers = (content) => {
  return {
    type: UPDATE_FLIGHT_MEMBERS,
    payload: content
  }
}

export const updateFlightDates = (content) => {
  return {
    type: UPDATE_FLIGHT_DATES,
    payload: content
  }
}

export const updateFlightType = (content) => {
  return {
    type: UPDATE_FLIGHT_TYPE,
    payload: content
  }
}