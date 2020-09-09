import React, { Component, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { connect } from 'react-redux'
import onClickOutside from "react-onclickoutside"

import { InputContainer, InputLabel } from './Input.jsx'

import { updateFlightDates, updateFlightType } from '../redux/actions'
import OneWayIcon from './../../public/img/one-way.svg'
import TwoWayIcon from './../../public/img/two-way.svg'

const FlightBookingDatePickerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`

const DatePickerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  visibility: ${ props => props.show ? 'visible' : 'hidden' };
  top: 60px;
  z-index: 10;
`

const FlightBookingDatePickerInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1.6rem 0.5rem 0.5rem 0.8rem;
  position: relative;
  top: 0;
  height: 56px;
  border-radius: 0;
  &:focus {
    border-radius: 0 !important;
    border: none !important;
    outline: none !important;
  }
`

const FlightTypeSwitchContainer = styled.span`
  position: absolute;
  width: 2.6rem;
  height: 1.6rem;
  top: calc(50% - 0.8rem);
  left: calc(50% - 1.55rem);
  overflow: hidden;
  z-index: 10;
  border-radius: 1.5rem;
  border: 0.5px solid rgba(180,180,180, 1);
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`

const FlightTypeSwitch = styled.span`
  text-align: center;
  width: 50%;
  height: 100%;
  position: relative;
  top: -0;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  ${props => {
    if(props.active) 
      return `
        color: #fff;
        background-color: #c00;
      `
    }
  }
`

const FlightTypeIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  opacity: 0.5;
  position: relative;
  top: 0.2rem;
  left: 0;
`

const formatDate = (dt) => {
  let date
  if (dt && dt instanceof Date) {
    date = moment(dt)
  } else {
    date = moment()
  }

  return date.format('dd DD/MM/YYYY') || ''
}

const DatePickerInput = ({ date, label, readonly, onFocus }) => {
  const [ dt, setDt ] = useState(formatDate())

  useEffect(() => {
    setDt(formatDate(date))
  }, [date])


  return (
    <FlightBookingDatePickerInputContainer>
      <Input value={dt} onChange={ () => {} } onFocus={ onFocus } readonly={ readonly }/>
      <InputLabel>
        { label }
      </InputLabel>
    </FlightBookingDatePickerInputContainer>
  )
}

class FlightBookingDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatepicker: false
    }
  }

  handleClickOutside(evt) {
    this.setShowDatepicker(false)
  };

  setShowDatepicker(status) {
    this.setState({ showDatepicker: status })
  }

  render() {
    const { showDatepicker } = this.state
    const { updateFlightDates, updateFlightType, flightDates } = this.props
    const { isOneWay, start, end } = flightDates

    const handleStartDateChanged = (date) => {
      const updateDate = {
        start: date,
        end: moment(date) > moment(end) ? date : end
      }
      updateFlightDates(updateDate)
    }

    const handleEndDateChanged = (date) => {
      this.setShowDatepicker(false)
      updateFlightDates({end: date})
    }

    const startDatePickerProps = ! isOneWay 
      ? {
          selectsStart: true,
          startDate: start,
          endDate: end,
          minDate: new Date()
        }
      : {}

      const endDatePickerProps = {
        selectsEnd: true,
        startDate: start,
        endDate: end,
        minDate: start
      }

    return (
      <FlightBookingDatePickerContainer>
        {/* HOLD THE DATEPICKERS INPUTS */}
        <FlightBookingDatePickerInputContainer>
          {/* START DATE */}
          <InputContainer>
            <DatePickerInput 
              date={start} 
              label={ isOneWay ? 'One-way' : 'Outbound flight' }
              readonly
              onFocus={ () => this.setShowDatepicker(true)} />
          </InputContainer>
          <FlightTypeSwitchContainer>
            <FlightTypeSwitch onClick={ () => updateFlightType(true) } active={ isOneWay }>
              <FlightTypeIcon src={OneWayIcon} />
            </FlightTypeSwitch>
            <FlightTypeSwitch onClick={ () => updateFlightType(false) } active={ !isOneWay }>
              <FlightTypeIcon src={TwoWayIcon} />
            </FlightTypeSwitch>
          </FlightTypeSwitchContainer>
          {/* END DATE */}
          <InputContainer paddingLeft="1.0rem" disabled={ isOneWay } >
            <DatePickerInput 
              date={ end } 
              label="Return Flight" 
              readonly
              onFocus={ isOneWay ? null : () => this.setShowDatepicker(true) } />
          </InputContainer>
        </FlightBookingDatePickerInputContainer>

        {/* HOLD THE DATEPICKERS CALENDARS */}
        <DatePickerContainer show={ showDatepicker }>
          <DatePicker selected={ start } onChange={ handleStartDateChanged } { ...startDatePickerProps } inline />
          { !isOneWay ? (
            <DatePicker selected={ end } onChange={ handleEndDateChanged } { ...endDatePickerProps } inline/>
          ) : null}
        </DatePickerContainer>
      </FlightBookingDatePickerContainer>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateFlightDates: (payload) => dispatch(updateFlightDates(payload)),
  updateFlightType: (payload) => dispatch(updateFlightType(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(FlightBookingDatePicker))
