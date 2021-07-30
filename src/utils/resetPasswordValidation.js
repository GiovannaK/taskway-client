/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const resetPasswordValidation = (password, confirmPassword) => {
  let formErrors = false;

  if (password.length < 8) {
    formErrors = true;
    toast.error('Senha deve ter pelo menos 8 caracteres');
  }

  if (confirmPassword.length < 8) {
    formErrors = true;
    toast.error('Campo confirmar a senha deve ter pelo menos 8 caracteres');
  }

  if (confirmPassword !== password) {
    formErrors = true;
    toast.error('Senhas não conferem');
  }

  return formErrors;
};
