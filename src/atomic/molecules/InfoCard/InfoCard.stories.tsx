import StorybookImage from '@assets/images/SetUpWallet.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { InfoCard } from './InfoCard.component';

export default {
  title: 'Molecules/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => {
  return (
    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
      <InfoCard {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  image: { src: StorybookImage, alt: 'Setup Wallet' },
  description:
    'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  title: 'Setup Your wallet',
};
