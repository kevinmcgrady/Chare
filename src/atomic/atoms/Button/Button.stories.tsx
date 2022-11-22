import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button.component';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
