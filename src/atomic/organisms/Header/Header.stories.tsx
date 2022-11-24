import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Header } from './Header.component';

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
