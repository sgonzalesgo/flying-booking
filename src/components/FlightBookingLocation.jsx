import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { updateFlightOrigin, updateFlightDestination } from './../redux/actions'

import FlightBookingLocationInput from './FlightBookingLocationInput.jsx'
import AirplaneIcon from './../../public/img/airplane.svg'

const FlightBookingLocationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
`

const FlightBookingLocationInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const FlightBookingLocationIconContainer = styled.span`
  width: 2.0rem;
  height: 2.0rem;
  position: absolute;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
  background-color: #fff;
  border-radius: 50%;
  z-index: 2;
`
const AirplaneIconImg = styled.img`
  transform: rotate(90deg);
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  left: 0.3rem;
  top: 0.2rem;
  opacity: 0.5;
`

const FlightBookingLocation = ({ flightLocation, updateFlightOrigin, updateFlightDestination }) => {
  const { locations, origin, destination } = flightLocation

  const handleOriginUpdate = (location) => {
    updateFlightOrigin(location)
  }

  const handleDestinationUpdate = (location) => {
    updateFlightDestination(location)
  }

  return (
    <FlightBookingLocationContainer>
      {/* FROM */}
      <FlightBookingLocationInputContainer>
        <FlightBookingLocationInput 
          label="From" 
          locations={ locations } 
          currentLocation={ origin }
          onSelected={ handleOriginUpdate } />
      </FlightBookingLocationInputContainer>
      <FlightBookingLocationIconContainer>
        <AirplaneIconImg src={AirplaneIcon} />
      </FlightBookingLocationIconContainer>
      {/* TO */}
      <FlightBookingLocationInputContainer>
        <FlightBookingLocationInput 
          label="To"
          locations={ locations }
          currentLocation={ destination }
          onSelected={ handleDestinationUpdate } />
      </FlightBookingLocationInputContainer>
    </FlightBookingLocationContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateFlightOrigin: (payload) => dispatch(updateFlightOrigin(payload)),
  updateFlightDestination: (payload) => dispatch(updateFlightDestination(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightBookingLocation)