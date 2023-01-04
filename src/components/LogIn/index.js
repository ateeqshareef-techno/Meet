import { Box } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import CustomButton from '../../Shared/Button';
import CustomInputField from '../../Shared/CustomInputField';
import PageTitle from '../../Shared/PageTitle';
import { LoginSchema } from '../../utils/validations';
import { loginStyle } from './style';

const LogIn = () => {
  return (
    <Box sx={loginStyle.loginParentWrapper}>
      <Box sx={loginStyle.loginWraper}>
        <Box sx={loginStyle.loginTitleWraper}>
          <PageTitle>MeetLogIn</PageTitle>
        </Box>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Box sx={loginStyle.loginContentWraper}>
                <Field
                  component={CustomInputField}
                  name="email"
                  label="Email"
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  width="100%"
                />
                <Field
                  component={CustomInputField}
                  name="password"
                  label="Password"
                  type="password"
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  width="100%"
                />
                <CustomButton variant="primary">LogIn</CustomButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LogIn;
