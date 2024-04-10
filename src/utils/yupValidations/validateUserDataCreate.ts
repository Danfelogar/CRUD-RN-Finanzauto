import * as Yup from 'yup';

export const validateUserDataCreate = Yup.object().shape({
  firstName: Yup.string().required('El nombre es requerido'),
  lastName: Yup.string().required('El apellido es requerido'),
  email: Yup.string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es requerido'),
});
