import * as yup from 'yup';

export const conferencesValidation = yup.object().shape({
  conferenceName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Conference Name is Required'),
  conferenceCode: yup
    .number()
    .required('Conference Code is Required')
    .typeError('Conference Code is Required Postive Integer')
    .positive()
    .integer(),
  conferenceUrl: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .url()
    .required('Conference url is Required '),
  conferenceMenu: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Conference MenuItem is Required'),
  timeZone: yup.string().required('Time Zone is Required'),
  locationImage: yup.mixed().required('A file locationImage is required'),
  splashImage: yup.mixed().required('A file splashImage is required'),
  boothImage: yup.mixed().required('A file boothImage is required'),
  startDate: yup.date().required('Start Date is required').typeError('Start Date is required'),
  endDate: yup
    .date()
    .typeError('End Date is required')
    .min(yup.ref('startDate'), "end date can't be before start date")
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address format').required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password must be 3 characters at minimum')
    .required('Password is required')
});
