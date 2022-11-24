import StorybookIcon from '@assets/images/Avatar.svg';
import Bear from '@assets/images/bear.png';
import Dog from '@assets/images/dog.png';
import Rabit from '@assets/images/rabit.png';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Collection } from './Collection.component';

export default {
  title: 'Molecules/Collection',
  component: Collection,
} as ComponentMeta<typeof Collection>;

const Template: ComponentStory<typeof Collection> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <Collection {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  mainImage: {
    src: Dog,
    alt: 'dog',
  },
  additionalImages: [
    {
      src: Rabit,
      alt: 'rabit',
    },
    {
      src: Bear,
      alt: 'bear',
    },
  ],
  title: 'DSGN Animals',
  author: { image: { src: StorybookIcon, alt: 'Avatar' }, name: 'GravityOne' },
  stat: '1020+',
};
