import { Box, InputLabel, Typography } from '@mui/material';
import React from 'react';
import Upload from '../../assets/upload.jpg';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { imageUploadingStyle } from './style';
import PropTypes from 'prop-types';

const ImageUploading = ({ allowed, handleBlur, touched, errors, values, setFieldValue, name }) => {
  console.log(touched, errors, values);
  return (
    <Box display="flex" flexDirection="column">
      <Typography fontSize="10px" color="textColrs.gray">
        <i>{allowed}</i>
      </Typography>
      <Box sx={imageUploadingStyle.imageUploadingWrapper}>
        <Box sx={imageUploadingStyle.imageWrapper}>
          <img
            width="50%"
            height="200px"
            src={values[name] ? URL.createObjectURL(values[name]) : Upload}
            alt=""
          />
        </Box>
        <InputLabel sx={imageUploadingStyle.inputLabelWrapper}>
          <Box display="flex" gap={1}>
            <FileUploadOutlinedIcon color="buttonColors.primary" />
            <Typography fontSize="18px" textTransform="uppercase" color="buttonColors.primary">
              upload image
            </Typography>
          </Box>
          <input
            style={{
              width: '0%'
            }}
            name={name}
            type="file"
            accept="image/ "
            onBlur={handleBlur}
            onChange={(e) => setFieldValue(name, e.currentTarget.files[0])}
            required
          />
        </InputLabel>
      </Box>
    </Box>
  );
};
ImageUploading.propTypes = {
  allowed: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  setFieldValue: PropTypes.func,
  handleBlur: PropTypes.func,
  name: PropTypes.string.isRequired
};

export default ImageUploading;
