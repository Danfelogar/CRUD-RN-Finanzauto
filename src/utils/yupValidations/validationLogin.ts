import * as yup from 'yup';

export const validateLogin = yup.object().shape({
  email: yup
    .string()
    .required('El campo es requerido.')
    .email('Ingrese un email valido.'),
  password: yup.string().required('El campo es requerido.'),
});
