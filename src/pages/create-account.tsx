import { Button, CTAPage, Spacing } from '@atomic';
import React from 'react';

export default function CreateAccount() {
  return (
    <CTAPage
      pageTitle='Create account'
      heading='Create account'
      subHeading='Welcome! enter your details and start creating, collecting and selling NFTs.'
    >
      <Spacing bottom='xs' top='xs'>
        <Button>Create account</Button>
      </Spacing>
    </CTAPage>
  );
}
