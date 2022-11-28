import Avatar from '@assets/images/Avatar.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CreatorPin } from './CreatorPin.component';

export default {
  title: 'Molecules/CreatorPin',
  component: CreatorPin,
} as ComponentMeta<typeof CreatorPin>;

const Template: ComponentStory<typeof CreatorPin> = (args) => {
  return <CreatorPin {...args} />;
};

export const Small = Template.bind({});

Small.args = {
  artistName: 'Orbitian',
  image: { src: Avatar, alt: 'Orbitian' },
  variant: 'small',
};

export const Large = Template.bind({});

Large.args = {
  artistName: 'Orbitian',
  image: { src: Avatar, alt: 'Orbitian' },
  variant: 'large',
};

export const ExtraLarge = Template.bind({});

ExtraLarge.args = {
  artistName: 'Orbitian',
  image: { src: Avatar, alt: 'Orbitian' },
  variant: 'extraLarge',
};

export const WithBackground = Template.bind({});

WithBackground.args = {
  artistName: 'Orbitian',
  image: { src: Avatar, alt: 'Orbitian' },
  variant: 'withBackground',
};
