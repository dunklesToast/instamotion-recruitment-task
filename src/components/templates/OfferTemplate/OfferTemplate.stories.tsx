import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { OfferTemplateProps } from './OfferTemplate';
import { OfferTemplate } from './OfferTemplate';

export default {
  title: 'Templates/OfferTemplate',
  component: OfferTemplate,
} as Meta;

const OfferTemplateComponent: Story<OfferTemplateProps> = (args) => <OfferTemplate {...args} />;

export const Default = OfferTemplateComponent.bind({});
Default.args = {
  children: 'Story of OfferTemplate',
};
