import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TabBar } from './TabBar.component';

export default {
  title: 'Molecules/TabBar',
  component: TabBar,
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => {
  return <TabBar {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  headings: ['Today', 'This Week', 'This Month', 'All Time'],
  mobileHeadings: ['1d', '7d', '30d', 'All Time'],
  tabs: [
    <p key='tab one'>tab one</p>,
    <p key='tab two'>tab 2</p>,
    <p key='tab three'>tab 3</p>,
    <p key='tab four'>tab four</p>,
    <p key='tab five'>tab five</p>,
  ],
};
