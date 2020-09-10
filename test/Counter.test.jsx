import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from '../src/components/Counter.jsx'

describe('Counter', () => {
  test('renders Counter component', () => {
    render(<Counter />);
  });
  test('increment on click + btn', () => {
    let count = 0
    const setCount = (c) => { count = c }
    render(<Counter count={count} setCount={setCount} />);
    const initialValue = count
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(count).toEqual(initialValue + 1)
  });
  test('decrement on click - btn', () => {
    let count = 10
    const setCount = (c) => { count = c }
    render(<Counter count={count} setCount={setCount} />);
    const initialValue = count
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(count).toEqual(initialValue - 1)
  })
});