import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { Text } from './Text.component';

export default {
  title: 'Atomic/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Discover digital art & Collect NFTs</Text>
);

export const H1 = Template.bind({});

H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});

H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});

H3.args = {
  variant: 'h3',
};

export const H4 = Template.bind({});

H4.args = {
  variant: 'h4',
};

export const H5 = Template.bind({});

H5.args = {
  variant: 'h5',
};

export const Subtitle = Template.bind({});

Subtitle.args = {
  variant: 'subTitle',
};

export const Caption = Template.bind({});

Caption.args = {
  variant: 'caption',
};

export const Body = Template.bind({});

Body.args = {
  variant: 'body',
};
