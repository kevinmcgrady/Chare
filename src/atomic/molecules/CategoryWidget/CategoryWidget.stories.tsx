import StorybookIcon from '@assets/icons/Swatches.svg';
import StorybookImage from '@assets/images/Monkey.png';
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
  icon: {
    src: StorybookIcon,
    alt: 'Swatches',
  },
  image: {
    src: StorybookImage,
    alt: 'Monkey',
  },
  title: 'Collectibles',
};
