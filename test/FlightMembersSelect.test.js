import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../src/redux/store'
import FlightMembersSelect from '../src/components/FlightMembersSelect.jsx'

describe('FlightMembersSelect ', () => {
  test('renders FlightMembersSelect component', () => {
    render(<Provider store={store}><FlightMembersSelect memberCount={ 1 } /></Provider>)
  });
});