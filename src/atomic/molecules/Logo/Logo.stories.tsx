import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Logo } from './Logo.component';

export default {
  title: 'Molecules/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

export const Default = Template.bind({});

Default.args = { url: '/' };
