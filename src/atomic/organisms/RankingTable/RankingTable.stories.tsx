import { Container } from '@atomic';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RankingTable } from './RankingTable.component';

export default {
  title: 'Organisms/RankingTable',
  component: RankingTable,
} as ComponentMeta<typeof RankingTable>;

const Template: ComponentStory<typeof RankingTable> = (args) => {
  return (
    <Container>
      <RankingTable {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {};
