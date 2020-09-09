import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlightMembersSelect from '../components/FlightMembersSelect'

describe('FlightMembersSelect ', () => {
  test('renders FlightMembersSelect component', () => {
    render(<Provider store={store}><FlightMembersSelect memberCount={ 1 } /></Provider>)
  });
});