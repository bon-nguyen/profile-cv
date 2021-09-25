import { Field } from "formik";
import React from "react";

function ContactField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default ContactField;
