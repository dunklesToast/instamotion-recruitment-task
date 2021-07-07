import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { RangeChangeEvent } from './RangeSelect';
import { RangeSelect } from './RangeSelect';

const RangeSelectRenderer = ({ mock }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const onChange = (e: RangeChangeEvent) => {
    setStart(e.start);
    setEnd(e.end);
    mock(e);
  };

  return <RangeSelect onChange={onChange} start={start} end={end} name='Test' />;
};

test('RangeSelect', async () => {
  const mock = jest.fn();
  render(<RangeSelectRenderer mock={mock} />);

  const element = () => screen.getByTestId('range-select');
  const inputFrom = () => screen.getByPlaceholderText('von');
  const inputTo = () => screen.getByPlaceholderText('bis');

  expect(element()).toBeInTheDocument();
  expect(element()).toMatchSnapshot();

  await userEvent.type(inputFrom(), '2');

  expect(mock).toBeCalledWith({
    start: '2',
    end: '',
  });

  mock.mockReset();

  await userEvent.type(inputTo(), '5');

  expect(mock).toBeCalledWith({
    start: '2',
    end: '5',
  });
});
