import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { InputContainer, InputLabel } from './Input.jsx'
import InputAutocomplete, { InputAutocompleteItem } from './InputAutocomplete.jsx'

const FlightLocationContainer = styled.div`
  position: relative;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1.6rem 0.5rem 0.5rem 0.8rem;
  position: relative;
  top: 0;
  height: 56px;
  font: 200 1.2rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  border-radius: 0;
  &:focus {
    border-radius: 0 !important;
    border: none !important;
    outline: none !important;
  }
`

const LocationInput = ({ label, locations, currentLocation, onSelected }) => {
  
  // STATE HOOK
  const [ location, setLocation ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ matchingLocations, setMatchingLocations ] = useState([])

  // EFFECT
  useEffect(() => {
    setLocation(currentLocation)
    setMatchingLocations(locations)
  }, [currentLocation, locations])

  const handleOptionSelected = (locationLabel) => {
    const selectedLocation = locations.find((location) => location.label === locationLabel)
    if (selectedLocation) {
      setLocation(selectedLocation)
      setSearchQuery(undefined)
      handleLocationUpdate(selectedLocation)
    }
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchQuery(value)
    setLocation(undefined)
    filterMatchingLocations(value)
    if (!value) {
      handleLocationUpdate()
    }
  }

  const filterMatchingLocations = (searchQuery) => {
    if (searchQuery) {
      // Update matching locations with those matching the searchQuery 
      setMatchingLocations(locations.filter((location) => {
        const locationAsString = JSON.stringify(Object.values(location)).toLowerCase() // Convert Location into string for making a full search
        const searchRegex = new RegExp(searchQuery.toLowerCase().replace(new RegExp(/[^a-z0-9\s]/, 'ig'), '')) // remove invalid regex characters

        return locationAsString.match(searchRegex) // perform a regex matching operation to get only those matching
      }))
    } else { // If searchQuery is empty return the full locations array
      setMatchingLocations(locations)
    }
  }

  const getLocationValue = () => {
    if (searchQuery) return searchQuery
    return location
     ? `${ location.label } (${location.tag.toUpperCase()})`
     : ''
  }

  const handleLocationUpdate = (selectedLocation, searchQuery) => {
    if (selectedLocation) {
      onSelected(selectedLocation)
    } else if (searchQuery) {
      onSelected({
        label: searchQuery,
        tag: ''
      })
    } else {
      onSelected(null)
    }
  }

  return (
    <FlightLocationContainer>
      <InputContainer>
        <Input 
          value={ getLocationValue() } 
          onChange={ handleInputChange }
        />
        <InputLabel>
          { label }
        </InputLabel>
      </InputContainer>
      <InputAutocomplete 
        items={ matchingLocations } 
        onSelected={ handleOptionSelected } 
        show={ !!searchQuery && !location }
      />
    </FlightLocationContainer>
  )
}

export default LocationInput