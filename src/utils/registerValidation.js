/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

export const registerValidation = (firstName, lastName, email, password) => {
  let formErrors = false;

  if (firstName.length < 3) {
    formErrors = true;
    toast.error('Primeiro nome deve ter pelo menos 3 letras');
  }

  if (lastName.length < 3) {
    formErrors = true;
    toast.error('Último nome deve ter pelo menos 3 letras');
  }

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
