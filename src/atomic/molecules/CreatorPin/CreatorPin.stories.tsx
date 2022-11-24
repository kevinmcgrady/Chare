import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CreatorPin } from './CreatorPin.component';

export default {
  title: 'Molecules/CreatorPin',
  component: CreatorPin,
} as ComponentMeta<typeof CreatorPin>;

const Template: ComponentStory<typeof CreatorPin> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <CreatorPin {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
