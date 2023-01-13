import { Button, Grid,Link, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import { Formik } from 'formik';
import React, { useState } from 'react';

import styles from './CreateAccountForm.module.scss';
import { InitialFormValues, onValidate } from './utils';

type CreateAccountFormProps = {
  onSubmit: (values: any) => void;
};

export const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
  onSubmit,
}) => {
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
              type='text'
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder='Username'
            />
            {errors.username && touched.username && (
              <Spacing bottom='sm' left='xs'>
                <Text variant='caption' font='spaceMono'>
                  {errors.username}
                </Text>
              </Spacing>
            )}
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
            <input
              className={styles.input}
              type='password'
              name='confirmPassword'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Spacing bottom='sm' left='xs'>
                <Text variant='caption' font='spaceMono'>
                  {errors.confirmPassword}
                </Text>
              </Spacing>
            )}
            <Grid noOfColumns={2}>
              <Button isFullWidth={isMobile}>
                {isSubmitting ? 'submitting...' : 'Create Account'}
              </Button>
              <Link href={urls.auth.login}>
                <Button variant='secondary'>Log in</Button>
              </Link>
            </Grid>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};
