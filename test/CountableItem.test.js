import React from 'react';
import { render } from '@testing-library/react';

import CountableItem from '../src/components/CountableItem.jsx'

describe('CountableItem', () => {
  test('renders CountableItem component', () => {
    render(<CountableItem />);
  });
});