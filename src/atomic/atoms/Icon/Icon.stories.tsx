import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon.component';

export default {
  title: 'Atomic/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  type: 'rocket',
};
