import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CreatorWidget } from './CreatorWidget.component';

export default {
  title: 'Molecules/CreatorWidget',
  component: CreatorWidget,
} as ComponentMeta<typeof CreatorWidget>;

const Template: ComponentStory<typeof CreatorWidget> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <CreatorWidget {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  creator: {
    _id: '1',
    emailAddress: 'kev@gmail.com',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
    username: 'kev',
  },
  index: 1,
};
