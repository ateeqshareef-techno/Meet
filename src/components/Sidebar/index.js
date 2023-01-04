import { Box } from '@mui/material';
import React from 'react';
import CustomIconButton from '../../Shared/IconButton';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { navbarStyle } from './style';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={navbarStyle.navbarWrapper}>
      <Box sx={navbarStyle.navbarIconsWrapper}>
        <Link to="confernces">
          <CustomIconButton variant="primary" title="Conferences">
            <MeetingRoomOutlinedIcon />
          </CustomIconButton>
        </Link>
        <Link to="conferncesAdmins">
          <CustomIconButton variant="secondary" title="Conferences Admins">
            <GroupIcon />
          </CustomIconButton>
        </Link>
        <Link to="settings">
          <CustomIconButton variant="secondary" title="Settings">
            <SettingsIcon />
          </CustomIconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
