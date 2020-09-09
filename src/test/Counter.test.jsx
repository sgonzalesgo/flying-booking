import React from 'react';
import { render, screen } from '@testing-library/react';

import Counter from '../components/Counter'

describe('Counter', () => {
  test('renders Counter component', () => {
    render(<Counter />);
  });
});