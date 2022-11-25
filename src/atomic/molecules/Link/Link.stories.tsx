import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Link } from './Link.component';

export default {
  title: 'Molecules/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args}>Marketplace</Link>;
};

export const Default = Template.bind({});

Default.args = { href: '/' };
