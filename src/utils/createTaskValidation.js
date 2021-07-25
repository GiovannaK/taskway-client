/* eslint-disable no-useless-return */
import { toast } from 'react-toastify';

export const createTaskValidation = (title, description, priority, assignTo) => {
  let formErrors = false;

  if (title.length < 1) {
    formErrors = true;
    toast.error('Título não pode ser nulo');
  }

  if (description.length < 1) {
    formErrors = true;
    toast.error('Descrição não pode ser nula');
  }

  if (priority.length < 3) {
    formErrors = true;
    toast.error('Prioridade não pode ser nula');
  }

  if (assignTo.length < 1) {
    formErrors = true;
    toast.error('Atribuir não pode ser nulo');
  }

  return formErrors;
};
