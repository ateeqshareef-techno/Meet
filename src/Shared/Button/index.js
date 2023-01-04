import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Variants = {
  primary: {
    backgroundColor: 'backgroundColors.primary',
    color: 'textColors.primary',
    variants: 'contained',
    border: 'backgroundColors.primary'
  },
  secondary: {
    backgroundColor: 'buttonColors.secondary',
    color: 'textColors.black',
    variants: 'contained',
    border: 'buttonColors.secondary'
  },
  outlinedPrimary: {
    backgroundColor: 'transparent',
    color: 'textColors.primary',
    variants: 'outlined',
    border: 'textColors.primary'
  }
};

const CustomButton = ({ variant, size, children, type }) => {
  return (
    <Button
      type={type}
      size={size}
      sx={{
        color: Variants[variant].color,
        backgroundColor: Variants[variant].backgroundColor,
        borderRadius: '6px',
        borderColor: Variants[variant].border,
        '&:hover': {
          borderColor: Variants[variant].border
        }
      }}
      variant={Variants[variant].variants}
      // onClick={onClick}
    >
      {children}
    </Button>
  );
};
CustomButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  // onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  isSubmitting: PropTypes.bool
};
export default CustomButton;
