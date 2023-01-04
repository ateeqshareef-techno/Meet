import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const LabelText = ({ children }) => {
  return (
    <Typography fontSize="18px" color="textColors.secondary">
      {children}
    </Typography>
  );
};
LabelText.propTypes = {
  children: PropTypes.string.isRequired
};
export default LabelText;
