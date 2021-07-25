/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const addPermissionValidation = (userId, permissionId) => {
  let formErrors = false;

  if (userId.length < 1) {
    formErrors = true;
    toast.error('Campo membro do workspace não pode ser nulo');
  }

  if (permissionId.length < 1) {
    formErrors = true;
    toast.error('Campo tipo de permissão não pode ser nulo');
  }

  return formErrors;
};
