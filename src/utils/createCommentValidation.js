/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const commentValidation = (body) => {
  let formErrors = false;

  if (body.length < 1 || body.length > 1000) {
    formErrors = true;
    toast.error('Seu comentário deve ter entre 1 e 1000 caracteres');
  }

  return formErrors;
};
