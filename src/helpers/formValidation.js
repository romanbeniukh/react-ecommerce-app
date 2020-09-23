import { object, string, number } from 'yup';

const formValidation = object().shape({
  name: string().min(2, 'Enter min 2 letters').max(20, 'Enter max 20 letters').required('Field is required'),
  price: number().min(2, 'Enter price more then 0').required('Field is required'),
  origin: object().shape({
    value: string().required('Field is required'),
    displayName: string().required('Field is required'),
  }),
});

export default formValidation;
