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

Default.args = {
  creator: {
    _id: '1',
    emailAddress: 'kev@gmail.com',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
    username: 'Kev',
  },
};
