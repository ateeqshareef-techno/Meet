import { FormControl, FormHelperText, InputLabel, MenuItem, Select, styled } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const CustomFormControl = styled(FormControl)({
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

const CustomSelect = ({
  label,
  width,
  menuItems,
  name,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
}) => {
  return (
    <CustomFormControl
      sx={{
        width: width
      }}>
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{
          color: 'textColors.secondary',
          '& .MuiSelect-select': {
            color: 'textColors.black',
            borderColor: 'white'
          },
          '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            borderColor: 'white'
          }
        }}
        name={name}
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        error={touched[name] && Boolean(errors[name])}>
        <FormHelperText>{touched[name] ? errors[name] : ''}</FormHelperText>
        {menuItems.map((item) => (
          <MenuItem value={item.name} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  );
};
CustomSelect.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  menuItems: PropTypes.array,
  name: PropTypes.string,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};
export default CustomSelect;
