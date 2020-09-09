import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlightBookingDatePicker from '../components/FlightBookingDatePicker'

describe('FlightBookingDatePicker', () => {
  test('renders FlightBookingDatePicker component', () => {
    render(<Provider store={store}><FlightBookingDatePicker /></Provider>)

  });

});