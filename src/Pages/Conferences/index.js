import React, { useState } from 'react';
import PageHeader from '../../Shared/PageHeader';
import PageTitle from '../../Shared/PageTitle';
import CustomButton from '../../Shared/Button';
import ConferencesInputFields from './ConferenceForm';
import ConferenceDateTime from './ConferenceDateTime';
import ConferenceImageUploading from './ConferenceImageUploading';
import PageFooter from '../../Shared/PageFooter';
import { Field, Form, Formik } from 'formik';
import { conferencesValidation } from '../../utils/validations';
import { createConference, imageUpload } from '../../utils/firebase';
import { toast } from 'react-toastify';

const Conferences = () => {
  const [locationImg, setLocationImg] = useState();
  const [splashImg, setSplashImg] = useState();
  const [boothImg, setBoothImg] = useState();

  const initialValues = {
    conferenceName: '',
    conferenceCode: '',
    conferenceUrl: '',
    conferenceMenu: '',
    timeZone: '',
    locationImage: null,
    splashImage: null,
    boothImage: null,
    startDate: null,
    endDate: null
  };
  return (
    <>
      <PageHeader>
        <PageTitle>Create Conferences</PageTitle>
        <CustomButton variant="primary">Back</CustomButton>
      </PageHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={conferencesValidation}
        onSubmit={(values, { resetForm }) => {
          imageUpload(values.locationImage, setLocationImg);
          imageUpload(values.splashImage, setSplashImg);
          imageUpload(values.boothImage, setBoothImg);
          const obj = {
            conferenceName: values.conferenceName,
            conferenceCode: values.conferenceCode,
            conferenceMenu: values.conferenceMenu,
            conferenceUrl: values.conferenceUrl,
            startDate: values.startDate.toString('MMMM yyyy'),
            endDate: values.endDate.toString('MMMM yyyy'),
            locationImg: locationImg,
            splashImg: splashImg,
            boothImg: boothImg
          };
          setTimeout(() => {
            createConference(obj);
            toast.success('Confrence Created Sucessfully');
            resetForm({ values: '' });
          }, 500);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              component={ConferencesInputFields}
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Field
              component={ConferenceDateTime}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <Field
              component={ConferenceImageUploading}
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
            />
            <PageFooter>
              <CustomButton variant="secondary">Cancel</CustomButton>
              <CustomButton variant="primary" type="submit">
                Create
              </CustomButton>
            </PageFooter>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Conferences;
