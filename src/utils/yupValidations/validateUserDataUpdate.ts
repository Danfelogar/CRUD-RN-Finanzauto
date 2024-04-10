import * as Yup from 'yup';

export const validateUserDataUpdate = Yup.object().shape({
  title: Yup.string()
    .oneOf(
      ['mr', 'ms', 'mrs', 'miss', 'dr', ''],
      'Título inválido. Las opciones permitidas son: mr, ms, mrs, miss, dr, o un campo vacío.',
    )
    .required('El título es requerido'),
  firstName: Yup.string()
    .min(2, 'Nombre demasiado corto')
    .max(50, 'Nombre demasiado largo')
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .min(2, 'Apellido demasiado corto')
    .max(50, 'Apellido demasiado largo')
    .required('El apellido es requerido'),
  gender: Yup.string()
    .oneOf(
      ['male', 'female', 'other', ''],
      'Género inválido. Las opciones permitidas son: male, female, other, o un campo vacío.',
    )
    .required('El género es requerido'),
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Número de teléfono inválido',
    )
    .required('El número de teléfono es requerido'),
});
