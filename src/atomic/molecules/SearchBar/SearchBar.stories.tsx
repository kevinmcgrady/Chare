import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SearchBar } from './SearchBar.component';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => {
  return <SearchBar {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
