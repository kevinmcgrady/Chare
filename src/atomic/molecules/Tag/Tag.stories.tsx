import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Tag } from './Tag.component';

export default {
  title: 'Molecules/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <Tag {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Animation',
};
