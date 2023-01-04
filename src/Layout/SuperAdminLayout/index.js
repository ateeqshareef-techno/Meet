import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import PropTypes from 'prop-types';
import { superAdminLayoutStyle } from './style';
import { Outlet } from 'react-router-dom';

const SuperAdminLayout = () => {
  return (
    <Box sx={superAdminLayoutStyle.layoutWrapper}>
      <Navbar />
      <Box display="flex">
        <Box maxWidth="90px" width="100%">
          <Sidebar />
        </Box>
        <Box sx={superAdminLayoutStyle.layoutContentWrapper}>
          <Box sx={superAdminLayoutStyle.layoutChildrenWrapper}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
SuperAdminLayout.propTypes = {
  children: PropTypes.element
};
export default SuperAdminLayout;
