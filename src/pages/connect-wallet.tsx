import { Button, CTAPage, Spacing } from '@atomic';
import React from 'react';

export default function ConnectWallet() {
  return (
    <CTAPage
      pageTitle='Connect Wallet'
      heading='Connect wallet'
      subHeading='Choose a wallet you want to connect. There are several wallet providers.'
    >
      <Spacing bottom='xs' top='xs'>
        <Button isFullWidth variant='wallet' icon={{ type: 'metamask' }}>
          Metamask
        </Button>
      </Spacing>
      <Spacing bottom='xs' top='xs'>
        <Button isFullWidth variant='wallet' icon={{ type: 'walletConnect' }}>
          Wallet Connect
        </Button>
      </Spacing>
      <Spacing bottom='xs' top='xs'>
        <Button isFullWidth variant='wallet' icon={{ type: 'coinbase' }}>
          Coinbase
        </Button>
      </Spacing>
    </CTAPage>
  );
}
