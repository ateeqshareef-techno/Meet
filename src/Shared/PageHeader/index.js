import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { pageHeaderStyle } from './style';

const PageHeader = ({ children }) => {
  return <Box sx={pageHeaderStyle.pageHeaderWrapper}>{children}</Box>;
};
PageHeader.propTypes = {
  children: PropTypes.array.isRequired
};
export default PageHeader;
