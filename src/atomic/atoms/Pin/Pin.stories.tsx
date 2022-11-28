import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Pin } from './Pin.component';

export default {
  title: 'Atomic/Pin',
  component: Pin,
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => <Pin {...args} />;

export const Default = Template.bind({});

Default.args = {
  number: 1,
};
