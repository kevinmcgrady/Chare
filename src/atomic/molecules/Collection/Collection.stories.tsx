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
    additionalImages: [],
    creator: {
      emailAddress: 'kev@gmail.com',
      image: 'http://www.example.com',
      username: 'kev',
    },
    mainImage: 'http://www.example.com',
    title: 'DSGN Animals',
  },
};
