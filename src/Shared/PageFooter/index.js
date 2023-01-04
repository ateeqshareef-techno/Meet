import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const PageFooter = ({ children }) => {
  return (
    <Box display="flex" justifyContent="flex-end" gap={1} alignItems="center" width="100%">
      {children}
    </Box>
  );
};
PageFooter.propTypes = {
  children: PropTypes.any.isRequired
};
export default PageFooter;
