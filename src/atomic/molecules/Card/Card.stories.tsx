import StorybookAvatar from '@assets/images/Avatar.svg';
import StorybookImage from '@assets/images/spaceWalking.png';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card } from './Card.component';

export default {
  title: 'Molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  );
};

export const CardWithoutPrice = Template.bind({});

CardWithoutPrice.args = {
  image: StorybookImage,
  title: 'Space Walking',
  creator: {
    image: StorybookAvatar,
    username: 'animakid',
  },
};

export const CardWithPrice = Template.bind({});

CardWithPrice.args = {
  image: StorybookImage,
  title: 'Space Walking',
  creator: {
    image: StorybookAvatar,
    username: 'animakid',
  },
  price: '1.63 ETH',
  highestBid: '0.33 wETH',
};
