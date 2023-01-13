import StorybookIcon from '@assets/icons/Swatches.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CategoryWidget } from './CategoryWidget.component';

export default {
  title: 'Molecules/CategoryWidget',
  component: CategoryWidget,
} as ComponentMeta<typeof CategoryWidget>;

const Template: ComponentStory<typeof CategoryWidget> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <CategoryWidget {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  category: {
    icon: StorybookIcon,
    image: 'http://www.example.com',
    title: 'Collectibles',
  },
};
