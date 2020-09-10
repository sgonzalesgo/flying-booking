import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../src/redux/store'
import FlightBookingDatePicker from '../src/components/FlightBookingDatePicker.jsx'

describe('FlightBookingDatePicker', () => {
  test('renders FlightBookingDatePicker component', () => {
    render(<Provider store={store}><FlightBookingDatePicker /></Provider>)

  });

});