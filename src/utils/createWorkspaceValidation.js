/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const createWorkspaceValidation = (title) => {
  let formErrors = false;

  if (title.length < 1) {
    formErrors = true;
    toast.error('Título não pode ser nulo');
  }

  return formErrors;
};
