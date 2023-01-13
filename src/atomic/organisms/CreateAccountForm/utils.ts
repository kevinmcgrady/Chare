type InitialValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const InitialFormValues: InitialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const onValidate = (values: InitialValues) => {
  let errors: any = {};

  if (!values.username) {
    errors.username = 'Please enter a username';
  }

  if (!values.email) {
    errors.email = 'Please enter an email address';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  }

  return errors;
};
