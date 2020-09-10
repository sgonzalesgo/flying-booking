import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../src/redux/store'

import FlightBookingLocation from '../src/components/FlightBookingLocation.jsx'

describe('FlightBookingLocation', () => {
  test('renders FlightBookingLocation component', () => {
    render(<Provider store={store}><FlightBookingLocation /></Provider>)
  });
});