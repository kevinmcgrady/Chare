import { Button } from '@atomic';
import { useMediaQuery } from '@hooks';
import { Formik } from 'formik';
import React from 'react';

import styles from './CreateAccountForm.module.scss';

export const CreateAccountForm: React.FC = () => {
  const { isMobile } = useMediaQuery();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validate={() => {}}
      onSubmit={() => {}}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
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
          <input
            className={styles.input}
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='Email Address'
          />
          <input
            className={styles.input}
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='Password'
          />
          <input
            className={styles.input}
            type='password'
            name='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            placeholder='Confirm Password'
          />
          <Button isFullWidth={isMobile}>Create Account</Button>
        </form>
      )}
    </Formik>
  );
};
