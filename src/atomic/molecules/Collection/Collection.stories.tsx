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
  collection: {
    additionalImages: [
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/bear.png',
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/rabit.png',
    ],
    creator: {
      _id: '1',
      emailAddress: 'kev@gmail.com',
      image:
        'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
      username: 'kev',
    },
    mainImage:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/dog.png',
    title: 'DSGN Animals',
  },
};
