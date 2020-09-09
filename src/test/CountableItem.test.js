import React from 'react';
import { render } from '@testing-library/react';

import CountableItem from '../components/CountableItem'

describe('CountableItem', () => {
  test('renders CountableItem component', () => {
    render(<CountableItem />);
  });
});