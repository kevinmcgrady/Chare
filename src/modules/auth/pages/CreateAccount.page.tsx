import { CreateAccountForm, CTATemplate, Spacing, Text } from '@atomic';
import { AuthService } from '@services/auth';
import { ResponseStatus } from '@services/types';
import { urls } from '@urls';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const CreateAccount: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { push } = useRouter();

  const onSubmit = async (values: any) => {
    const response = await AuthService.register(values);
    if (response.status === ResponseStatus.Error) {
      setErrorMessage(response.errorMessage as string);
    } else {
      push(urls.auth.connectWallet);
    }
  };
  return (
    <CTATemplate
      pageTitle='Create account'
      heading='Create account'
      subHeading='Welcome! enter your details and start creating, collecting and selling NFTs.'
    >
      <Spacing bottom='xs' top='xs'>
        {errorMessage && (
          <Spacing bottom='sm'>
            <Text>{errorMessage}</Text>
          </Spacing>
        )}
        <CreateAccountForm onSubmit={(values) => onSubmit(values)} />
      </Spacing>
    </CTATemplate>
  );
};
