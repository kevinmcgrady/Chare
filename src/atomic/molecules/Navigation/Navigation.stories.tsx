import { ComponentMeta, ComponentStory } from '@storybook/react';
import { authNavigationUrls, navigationUrls } from '@urls';
import React from 'react';

import { Navigation } from './Navigation.component';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  activeLink: '/',
  authNavigationUrls: authNavigationUrls,
  navigationUrls: navigationUrls,
  isMobile: false,
};
