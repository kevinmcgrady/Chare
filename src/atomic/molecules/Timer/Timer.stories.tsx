import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Timer } from './Timer.component';

export default {
  title: 'Molecules/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => {
  return (
    <div style={{ maxWidth: '250px', margin: '0 auto' }}>
      <Timer {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
