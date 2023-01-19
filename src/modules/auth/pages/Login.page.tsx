import { CTATemplate, LoginForm, Spacing, Text } from '@atomic';
import { AuthService } from '@modules/auth/service';
import { urls } from '@urls';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { push } = useRouter();

  const onSubmit = async (values: any) => {
    try {
      await AuthService.login(values);
      push(urls.homepage);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  return (
    <CTATemplate
      pageTitle='Log in'
      heading='Log in'
      subHeading='Welcome back! enter your details and start creating, collecting and selling NFTs.'
    >
      <Spacing bottom='xs' top='xs'>
        {errorMessage && (
          <Spacing bottom='sm'>
            <Text>{errorMessage}</Text>
          </Spacing>
        )}
        <LoginForm onSubmit={(values) => onSubmit(values)} />
      </Spacing>
    </CTATemplate>
  );
};
