import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders APP', () => {
  render(<App />);
});

test('it checks for Women\'s World Cup', () => {
  const { getByText } = render(<App/>);
  getByText('Women\'s World Cup')
})

test('it checks for Player: Alex Morgan', () => {
  const { getByText } = render(<App/>);
  getByText(/players ranked by search interest/i)
})