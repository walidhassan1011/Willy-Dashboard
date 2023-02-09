import React from "react";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
  city: "",
};
const initialValuesArr = Object.keys(initialValues);
const userSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
});
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "&>div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              {initialValuesArr.slice(0, 2).map((item, index) => {
                return (
                  <TextField
                    key={index}
                    fullWidth
                    variant="filled"
                    label={item}
                    name={item}
                    onBlur={handleBlur}
                    value={values[item]}
                    onChange={handleChange}
                    error={!!touched[item] && !!errors[item]}
                    helperText={touched[item] && errors[item]}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                );
              })}
              {initialValuesArr.slice(2).map((item, index) => {
                return (
                  <TextField
                    key={index}
                    fullWidth
                    variant="filled"
                    label={item}
                    name={item}
                    onBlur={handleBlur}
                    value={values[item]}
                    onChange={handleChange}
                    error={!!touched[item] && !!errors[item]}
                    helperText={touched[item] && errors[item]}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                );
              })}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button variant="contained" type="submit" color="secondary">
                Create User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
