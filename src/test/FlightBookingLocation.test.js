import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlightBookingLocation from '../components/FlightBookingLocation'

describe('FlightBookingLocation', () => {
  test('renders FlightBookingLocation component', () => {
    render(<Provider store={store}><FlightBookingLocation /></Provider>)
  });
});