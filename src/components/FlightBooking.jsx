import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import FlightBookingMembersSelect from './FlightMembersSelect.jsx'
import FlightBookingLocation from './FlightBookingLocation.jsx'
import FlightBookingDatePicker from './FlightBookingDatePicker.jsx'

const FlightBookingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
  flex-wrap: wrap;
`

const FlightBookingLocationContainer = styled.div`
  display: flex;
  padding-right: 1rem;
  padding-bottom: 1rem;
  flex-grow: 1;
`

const FlightBookingDateRangePickerContainer = styled.div`
  display: flex;
  padding-right: 1rem;
  padding-bottom: 1rem;
  flex-grow: 1;
`

const FlightBookingMembersSelectContainer = styled.div`
  display: flex;
  padding-right: 1rem;
  padding-bottom: 1rem;
  flex-grow: 1;
`

const FlightBookingSearchBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1rem 0 0;
`

const FlightBookingSearchBtn = styled.button`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  padding: 12px 20px;
  border: 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-shadow: none;
  border-radius: 0;
  background-color: #c00;
  color: #fff;
  width: 100%;
  min-width: 260px;
  max-width: 260px;
  height: 56px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover, &:active, &:focus {
    outline: none !important;
  }
`

const FlightBooking = ({ flightLocation, flightMembers, flightDates }) => {
  const { origin, destination } = flightLocation
  const { start, isOneWay } = flightDates
  const { adults, children, infants } = flightMembers

  const goToSearch = () => {
    const flightType = isOneWay ? 'Outbound' : 'Outbound';
    const flightOrigin = origin?.tag || origin?.label || ''
    const flightDestination = destination?.tag || destination?.label || ''
    const flightFromDate = moment(start).format('YYYY-MM-DD')

    if (!flightOrigin || !flightDestination || !flightFromDate) {
      window.alert('Please fill required fields');
      return;
    }
    
    const searchUrl = `https://www.swiss.com/us/en/Book/${flightType}/${flightOrigin}-${flightDestination}/from-${flightFromDate}/adults-${adults || 0}/children-${children || 0}/infants-${infants || 0}/class-economy/al-LX/sidmbvl`

    window.open(searchUrl, self)
  }

  return (
    <FlightBookingContainer>
      
      {/* LOCATION CONTAINER */}
      <FlightBookingLocationContainer>
        <FlightBookingLocation />
      </FlightBookingLocationContainer>

      {/* DATE RANGE PICKER CONTAINER */}
      <FlightBookingDateRangePickerContainer>
        <FlightBookingDatePicker />
      </FlightBookingDateRangePickerContainer>
      
      {/* MEMBERS CONTAINER */}
      <FlightBookingMembersSelectContainer>
        <FlightBookingMembersSelect />
      </FlightBookingMembersSelectContainer>

      {/* SEARCH BTN */}
      <FlightBookingSearchBtnContainer>
        <FlightBookingSearchBtn onClick={ goToSearch }>
          Search
        </FlightBookingSearchBtn>
      </FlightBookingSearchBtnContainer>
    </FlightBookingContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(FlightBooking)