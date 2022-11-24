import StorybookImage from '@assets/images/Avatar-6.svg';
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
  image: { src: StorybookImage, alt: 'Mr Fox' },
  authorName: 'Mr Fox',
  totalSavings: '34.53 ETH',
  index: 1,
};
