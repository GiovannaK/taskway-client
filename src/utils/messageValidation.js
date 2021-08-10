/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const messageValidation = (body) => {
  let formErrors = false;

  if (body.length < 1 || body.length > 5000) {
    formErrors = true;
    toast.error('Sua mensagem deve ter entre 1 e 5000 caracteres');
  }

  return formErrors;
};
