import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CountableItem from './CountableItem.jsx'
import { InputContainer, InputLabel, InputPlaceholder } from './Input.jsx'

import { updateFlightMembers, updateFlightDates } from './../redux/actions'

const CountableItemContainer = styled.div`
  width: 100%;
  min-width: 260px;
  position: relative;
`

const CountableInputContainer = styled.div`
  width: 100%;
  min-width: 100%;
  position: relative;
  ${props => props.open 
    ? `&:after{
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-top-color: initial;
          border-top-style: none;
          border-top-width: initial;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 4px;
          border-bottom-color: #333;
          border-bottom-style: solid;
          border-bottom-width: 4px;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 4px;
          border-image-source: initial;
          border-image-slice: initial;
          border-image-width: initial;
          border-image-outset: initial;
          border-image-repeat: initial;
          border-bottom-color: #333;
          border-top: none;
          border-top-width: initial;
          border-top-style: none;
          border-top-color: initial;
          content: "";
          position: absolute;
          right: 15px;
          top: 50%;
      };`
    : `&:after {
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-top-color: #333;
          border-top-style: solid;
          border-top-width: 4px;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 4px;
          border-bottom-color: initial;
          border-bottom-style: none;
          border-bottom-width: initial;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 4px;
          border-image-source: initial;
          border-image-slice: initial;
          border-image-width: initial;
          border-image-outset: initial;
          border-image-repeat: initial;
          border-top-color: #333;
          border-bottom: none;
          border-bottom-width: initial;
          border-bottom-style: none;
          border-bottom-color: initial;
          content: "";
          position: absolute;
          right: 15px;
          top: 50%;
      };`
  }
  
`

const CountableOptionsContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none' };
  position: absolute;
  width: 100%;
`

const CountableOption = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
`

const CountableOptionsCloseBtn = styled.button`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  padding: 18px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
`

const FlightMemberSelect = ({ flightMembers, updateFlightMembers }) => {

  const [showOptions, setShowOptions ] = useState(false)

  const categories = [
    {
      headerPlural: 'Adults',
      headerSingular: 'Adult',
      subheader: '12+ years',
      key: 'adults',
      min: 1
    },
    {
      headerPlural: 'Children',
      headerSingular: 'Children',
      subheader: '2-11 years',
      key: 'children',
    },
    {
      headerPlural: 'Infants',
      headerSingular: 'Infant',
      subheader: '0-1 years',
      key: 'infants',
    }
  ]

  // Handle when a category have increased or decreased its value
  const handleCountChange = (key, count) => {
    updateFlightMembers({
      [key]: count
    })
  }

  // Render the options that will appear in the Flighting Member selector
  const renderOptions = () => categories.map((category) => {
    const { headerPlural, subheader, key, min } = category

    const count = flightMembers && flightMembers[key] ? flightMembers[key] : 0
    return (
      <CountableOption key={key}>
        <CountableItem 
          header={ headerPlural } 
          subheader={ subheader }
          count={ count }
          min={ min }
          onChange={ (count) => handleCountChange(key, count) } 
        />
      </CountableOption>
    )
  })

  const prepareSummaryDetails = () => {
    const detailsPerCategory = categories.map((category) => {
      const { headerPlural, headerSingular, key } = category
      const count = flightMembers && flightMembers[key] ? flightMembers[key] : 0
      return `${ count } ${count === 1 ? headerSingular : headerPlural }`
    })

    return detailsPerCategory.join(', ')
  }

  const toggleOptionsVisibility = () => {
    setShowOptions(!showOptions)
  }

  return (
    <CountableItemContainer>
      {/* SELECT */}
      <CountableInputContainer onClick={ toggleOptionsVisibility } open={ showOptions }>
        <InputContainer >
          <InputLabel>
            { prepareSummaryDetails() }
          </InputLabel>
          <InputPlaceholder>
            { flightMembers.total } Passenger{ flightMembers.total > 1 ? 's': '' }
          </InputPlaceholder>
        </InputContainer>
      </CountableInputContainer>
      {/* OPTIONS */}
      <CountableOptionsContainer show={showOptions} >
        { renderOptions() }
        <CountableOptionsCloseBtn onClick={ toggleOptionsVisibility }>
          Close
        </CountableOptionsCloseBtn>
      </CountableOptionsContainer>
    </CountableItemContainer>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  updateFlightMembers: payload => dispatch(updateFlightMembers(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightMemberSelect)