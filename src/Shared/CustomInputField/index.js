import { styled, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#030e12'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#808080'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#808080'
    },
    '&:hover fieldset': {
      borderColor: '#5bccf6'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5bccf6'
    }
  }
});
const CustomInputField = ({
  label,
  width,
  name,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  type = 'text'
}) => {
  console.log('values==>', values);
  console.log(touched, 'errors==>', errors);
  return (
    <CustomTextField
      sx={{
        width: width
      }}
      type={type}
      name={name}
      label={label}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      helperText={touched[name] ? errors[name] : ''}
      error={touched[name] && Boolean(errors[name])}
    />
  );
};
CustomInputField.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  type: PropTypes.string
};
export default CustomInputField;
