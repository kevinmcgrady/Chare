import StorybookImage from '@assets/images/Spaceship.png';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { Image } from './Image.component';

export default {
  title: 'Atomic/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: StorybookImage,
  alt: 'image',
  width: 200,
  height: 200,
};
