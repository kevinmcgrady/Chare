import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button.component';

export default {
  title: 'Atomic/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Getting Started</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: 'tertiary',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  variant: 'primary',
  icon: {
    type: 'rocket',
    color: 'primary',
  },
};

export const Wallet = Template.bind({});

Wallet.args = {
  variant: 'wallet',
  icon: {
    type: 'metamask',
  },
};
