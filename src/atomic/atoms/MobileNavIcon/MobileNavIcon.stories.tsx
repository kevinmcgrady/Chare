import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MobileNavIcon } from './MobileNavIcon.component';

export default {
  title: 'Atomic/MobileNavIcon',
  component: MobileNavIcon,
} as ComponentMeta<typeof MobileNavIcon>;

const Template: ComponentStory<typeof MobileNavIcon> = (args) => (
  <MobileNavIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => null,
};
