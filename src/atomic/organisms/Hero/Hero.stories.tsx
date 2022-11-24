import { Container } from '@atomic';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Hero } from './Hero.component';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return (
    <Container>
      <Hero {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {};
