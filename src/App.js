import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { updateFlightLocations } from './redux/actions'

import FlightBooking from './components/FlightBooking.jsx'
import Locations from './../public/locations.json'

const App = ({ updateFlightLocations }) => {
  
  const loadLocations = async () => {
    try {
      const locations = await axios.get('https://www.swiss.com/us/en/Suggest/Suggest?q=%query%&m=HP')
      return locations
    } catch (err) {
      return Locations
    }
  }

  useEffect(() => {
    async function updateLocation() {
      try {
        const locations = await loadLocations()
        updateFlightLocations(locations)
      } catch (err) {
        console.log(err)
      }
    }
    updateLocation()
    
  }, [])

  return (
      <FlightBooking />
  )
}

const mapDispatchToProps = dispatch => ({
  updateFlightLocations: (payload) => dispatch(updateFlightLocations(payload)),
});

export default connect(null, mapDispatchToProps)(App)