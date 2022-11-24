import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Stats } from './Stats.component';

export default {
  title: 'Molecules/Stats',
  component: Stats,
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <Stats {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
