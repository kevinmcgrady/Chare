import { Container } from '@atomic';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LoginForm } from './LoginForm.component';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
  return (
    <Container>
      <LoginForm {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {};
