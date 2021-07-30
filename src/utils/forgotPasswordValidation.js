/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

export const forgotPasswordValidation = (email) => {
  let formErrors = false;

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('E-mail inválido');
  }

  return formErrors;
};
