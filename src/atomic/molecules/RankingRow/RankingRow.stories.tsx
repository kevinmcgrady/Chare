import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RankingRow } from './RankingRow.component';

export default {
  title: 'Molecules/RankingRow',
  component: RankingRow,
} as ComponentMeta<typeof RankingRow>;

const Template: ComponentStory<typeof RankingRow> = (args) => {
  return <RankingRow {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
