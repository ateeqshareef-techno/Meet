import { Grid } from '@mui/material';
import React from 'react';
import ImageUploading from '../../../Shared/ImageUploading';
import LabelText from '../../../Shared/LabelText';
import ConferenceImageUpload from './ConferenceImageUpload';

const ConferenceImageUploading = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ConferenceImageUpload>
          <LabelText>Location Map</LabelText>
          <ImageUploading {...props} name="locationImage" allowed="Allowed Format jpg/png" />
        </ConferenceImageUpload>
      </Grid>
      <Grid item xs={12} md={6}>
        <ConferenceImageUpload>
          <LabelText>Location Map</LabelText>
          <ImageUploading {...props} name="splashImage" allowed="Allowed Format jpg/png" />
        </ConferenceImageUpload>
      </Grid>
      <Grid item xs={12} md={6}>
        <ConferenceImageUpload>
          <LabelText>Location Map</LabelText>
          <ImageUploading {...props} name="boothImage" allowed="Allowed Format jpg/png" />
        </ConferenceImageUpload>
      </Grid>
    </Grid>
  );
};

export default ConferenceImageUploading;
