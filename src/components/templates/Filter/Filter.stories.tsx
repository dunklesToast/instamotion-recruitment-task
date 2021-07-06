import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { FilterBarProps } from './FilterBar';
import { FilterBar } from './FilterBar';

export default {
  title: 'Templates/Filter',
  component: FilterBar,
} as Meta;

const FilterComponent: Story<FilterBarProps> = (args) => (
  <div style={{ width: 300 }}>
    <FilterBar {...args} />
  </div>
);

export const Default = FilterComponent.bind({});
Default.args = {
  children: 'Story of Filter',
};

Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
