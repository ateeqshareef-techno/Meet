import { Box, TextField } from '@mui/material';
import React from 'react';
import CustomCheckBox from '../../../Shared/CustomCheckBox';
import { dateTimeStyle } from './style';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const DateDisplay = styled(DesktopDatePicker)({
  '& label.Mui-focused': {
    color: '#030e12'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#808080'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#808080'
    },
    '&:hover fieldset': {
      borderColor: '#5bccf6'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5bccf6'
    }
  }
});
const ConferenceDateTime = ({ values, errors, setFieldValue }) => {
  return (
    <Box sx={dateTimeStyle.dateTimeWrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateDisplay
          disablePast
          name="startDate"
          label="Start Date"
          inputFormat="MM/DD/YYYY"
          value={values.startDate}
          onChange={(newValue) => setFieldValue('startDate', newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errors.startDate)}
              helperText={errors.startDate ? errors.startDate : ''}
            />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateDisplay
          name="endDate"
          label="End Date"
          inputFormat="MM/DD/YYYY"
          value={values.endDate}
          onChange={(newValue) => setFieldValue('endDate', newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={errors.endDate ? errors.endDate : ''}
              error={Boolean(errors.endDate)}
            />
          )}
        />
      </LocalizationProvider>
      <CustomCheckBox label="Use 24hr Format" />
      <CustomCheckBox label="is Active" />
    </Box>
  );
};
ConferenceDateTime.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  startDateChange: PropTypes.func,
  endDateChange: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  setFieldValue: PropTypes.func
};
export default ConferenceDateTime;
