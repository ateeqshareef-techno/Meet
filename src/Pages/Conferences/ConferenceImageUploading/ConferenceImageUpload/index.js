import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const ConferenceImageUpload = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {children}
    </Box>
  );
};
ConferenceImageUpload.propTypes = {
  children: PropTypes.array.isRequired
};
export default ConferenceImageUpload;
