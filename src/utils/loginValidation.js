/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

export const loginValidation = (email, password) => {
  let formErrors = false;

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('E-mail inválido');
  }

  if (password.length < 8) {
    formErrors = true;
    toast.error('Senha deve ter pelo menos 8 caracteres');
  }

  return formErrors;
};
