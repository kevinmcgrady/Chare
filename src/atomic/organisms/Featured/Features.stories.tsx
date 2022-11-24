import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Featured } from './Featured.component';

export default {
  title: 'Organisms/Featured',
  component: Featured,
} as ComponentMeta<typeof Featured>;

const Template: ComponentStory<typeof Featured> = (args) => {
  return <Featured {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
