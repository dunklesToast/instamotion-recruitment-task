import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

test('Select', () => {
  render(<Select onChange={jest.fn} localizedName='Test' name='test' options={['a', 'b']} />);
  expect(screen.getByTestId('select')).toBeInTheDocument();
  expect(screen.getByTestId('select')).toMatchSnapshot();
});
