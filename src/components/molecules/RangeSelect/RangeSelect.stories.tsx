import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import type { RangeChangeEvent, RangeSelectProps } from './RangeSelect';
import { RangeSelect } from './RangeSelect';

export default {
  title: 'Molecules/RangeSelect',
  component: RangeSelect,
} as Meta;

const RangeSelectComponent: Story<RangeSelectProps> = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const update = (values: RangeChangeEvent) => {
    setStart(values.start);
    setEnd(values.end);
  };

  return <RangeSelect name='Storybook' start={start} end={end} onChange={update} />;
};

export const Default = RangeSelectComponent.bind({});
