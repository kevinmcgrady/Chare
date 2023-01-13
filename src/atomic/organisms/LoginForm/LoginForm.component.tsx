import { Button, Grid,Link, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import { Formik } from 'formik';
import React, { useState } from 'react';

import styles from './LoginForm.module.scss';
import { InitialFormValues, onValidate } from './utils';

type LoginFormProps = {
  onSubmit: (values: any) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { isMobile } = useMediaQuery();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Formik
        initialValues={InitialFormValues}
        validate={onValidate}
        onSubmit={async (values) => {
          setIsSubmitting(true);
          onSubmit(values);
          setIsSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='Email Address'
            />
            {errors.email && touched.email && (
              <Spacing bottom='sm' left='xs'>
                <Text variant='caption' font='spaceMono'>
                  {errors.email}
                </Text>
              </Spacing>
            )}
            <input
              className={styles.input}
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Password'
            />
            {errors.password && touched.password && (
              <Spacing bottom='sm' left='xs'>
                <Text variant='caption' font='spaceMono'>
                  {errors.password}
                </Text>
              </Spacing>
            )}
            <Grid noOfColumns={2}>
              <Button isFullWidth={isMobile}>
                {isSubmitting ? 'submitting...' : 'Log in'}
              </Button>
              <Link href={urls.auth.createAccount}>
                <Button variant='secondary'>Create account</Button>
              </Link>
            </Grid>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};
