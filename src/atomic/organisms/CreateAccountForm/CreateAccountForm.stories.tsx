import { Container } from '@atomic';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CreateAccountForm } from './CreateAccountForm.component';

export default {
  title: 'Organisms/CreateAccountForm',
  component: CreateAccountForm,
} as ComponentMeta<typeof CreateAccountForm>;

const Template: ComponentStory<typeof CreateAccountForm> = (args) => {
  return (
    <Container>
      <CreateAccountForm {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {};
