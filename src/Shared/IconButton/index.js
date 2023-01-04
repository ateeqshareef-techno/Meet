import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { customIconButtonStyle } from './style';
import PropTypes from 'prop-types';

const Variants = {
  primary: {
    color: 'buttonColors.primary'
  },
  secondary: {
    color: 'buttonColors.secondary'
  }
};

const CustomIconButton = ({ variant, title, children, onClick }) => {
  return (
    <Box sx={customIconButtonStyle.iconButtonWrapper}>
      <IconButton
        onClick={onClick}
        sx={{
          color: Variants[variant].color
        }}>
        {children}
      </IconButton>
      <Typography textAlign="center" fontSize="12px" color={Variants[variant].color}>
        {title}
      </Typography>
    </Box>
  );
};
CustomIconButton.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
  title: PropTypes.string
};
export default CustomIconButton;
