type InitialValues = {
  email: string;
  password: string;
};

export const InitialFormValues: InitialValues = {
  email: '',
  password: '',
};

export const onValidate = (values: InitialValues) => {
  let errors: any = {};

  if (!values.email) {
    errors.email = 'Please enter an email address';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
};
