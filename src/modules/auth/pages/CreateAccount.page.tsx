import { CreateAccountForm, CTATemplate, Spacing } from '@atomic';
import React from 'react';

export const CreateAccount: React.FC = () => {
  return (
    <CTATemplate
      pageTitle='Create account'
      heading='Create account'
      subHeading='Welcome! enter your details and start creating, collecting and selling NFTs.'
    >
      <Spacing bottom='xs' top='xs'>
        <CreateAccountForm />
      </Spacing>
    </CTATemplate>
  );
};
