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
    icon: 'https://storage.googleapis.com/chare-5cc75.appspot.com/categories/PaintBrush.svg',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/categories/purpleBackground.png',
    title: 'Collectibles',
  },
};
