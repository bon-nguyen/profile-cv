
import { Field } from "formik";
import React from "react";

function ContactArea({ className, valid, error, ...props }) {
  return <Field component="textarea" className={className} {...props} ></Field>;
}

export default ContactArea;
