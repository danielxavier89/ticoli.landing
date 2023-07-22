"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Button } from "@/universal";
import { FormikError } from "./FormikError";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface EmailValue {
  email: string;
}

export const InputGroup = () => {
  const initialValues: EmailValue = { email: "" };

  const handleSubmit = (
    { email }: EmailValue,
    { resetForm }: FormikHelpers<EmailValue>
  ) => {
    console.log(email);
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form>
          <section className="w-full input-group-with lg:w-[512px] flex justify-between items-center gap-4 bg-surface rounded-xl p-2 pl-4 relative">
            <Field
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="bg-surface outline-none w-full lg:max-w-[343px] text-subtle-contrast text-base md:text-lg"
            />

            <Button type="submit" disabled={isSubmitting} mobIcon>
              Sign Up
            </Button>
            <FormikError name="email" component="div" />
          </section>
        </Form>
      )}
    </Formik>
  );
};
