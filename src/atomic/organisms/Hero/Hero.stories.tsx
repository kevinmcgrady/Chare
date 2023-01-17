import { Container } from '@atomic';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Hero } from './Hero.component';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return (
    <Container>
      <Hero {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {
  headlineNft: {
    creator: {
      _id: '1',
      emailAddress: 'kev@gmail.com',
      image:
        'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
      username: 'Kev',
    },
    description: 'description',
    endDate: new Date(),
    highestBid: '12',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/nfts/spaceWalking.png',
    mintedOn: new Date(),
    price: '12',
    slug: 'slug',
    tags: ['tag', 'tag', 'tag'],
    title: 'Space Walking',
  },
};
