import { Box, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../Shared/Button';
import { navbarStyle } from './style';

const Navbar = () => {
  return (
    <Box sx={navbarStyle.navbarWraper}>
      <Box width="90%" mx="auto" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" fontSize="22px" color="textColors.primary">
          Meet
        </Typography>
        <Typography variant="h1" fontSize="18px" color="textColors.primary">
          Admin Panel
        </Typography>
        <CustomButton variant="outlinedPrimary">Logout</CustomButton>
      </Box>
    </Box>
  );
};

export default Navbar;
