import { Grid } from '@mui/material';
import React from 'react';
import CustomInputField from '../../../Shared/CustomInputField';
import CustomSelect from '../../../Shared/CustomSelect';
import { v4 as uuidv4 } from 'uuid';

const timeZoneData = [
  {
    id: uuidv4(),
    name: 'America/Sitka',
    description: 'Alaska Daylight Time',
    offset: -480
  },
  {
    id: uuidv4(),
    name: 'US/Alaska',
    description: 'Alaska Daylight Time',
    offset: -480
  },
  {
    id: uuidv4(),
    name: 'Asia/Almaty',
    description: 'Alma-Ata Time',
    offset: 360
  },
  {
    id: uuidv4(),
    name: 'America/Porto_Velho',
    description: 'Amazon Time',
    offset: -240
  },
  {
    id: uuidv4(),
    name: 'Brazil/West',
    description: 'Amazon Time',
    offset: -240
  },
  {
    id: uuidv4(),
    name: 'Asia/Anadyr',
    description: 'Anadyr Time',
    offset: 720
  }
];

const ConferencesInputFields = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CustomInputField {...props} name="conferenceName" label="Conference Name" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomInputField {...props} name="conferenceCode" label="Conference Code" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomInputField
          {...props}
          name="conferenceUrl"
          label="Explore Conference URL"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomInputField
          {...props}
          name="conferenceMenu"
          label="Explore Conference MenuItems"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomSelect
          {...props}
          name="timeZone"
          label="Time Zone"
          menuItems={timeZoneData}
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default ConferencesInputFields;
