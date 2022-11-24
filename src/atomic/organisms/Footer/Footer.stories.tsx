import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Footer } from './Footer.component';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
