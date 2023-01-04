import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const PageTitle = ({ children }) => {
  return (
    <Typography variant="h1" fontSize="22px" color="textColors.black">
      {children}
    </Typography>
  );
};
PageTitle.propTypes = {
  children: PropTypes.string
};
export default PageTitle;
