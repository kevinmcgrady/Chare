import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { IconLink } from './IconLink.component';

export default {
  title: 'Molecules/IconLink',
  component: IconLink,
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <IconLink {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  href: '/',
  icon: { type: 'world' },
  text: 'View Original',
};
