
 import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import Section from '../section';
import {ContactCode ,ContactSubmit, ContactContainer, ContactFormArea, ContactFormError, ContactFormField, ContactFormGroup, ContactSection, ContactWrap } from './Contact';


const validationSchema = Yup.object().shape({
    name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Please enter name'),
    email: Yup.string()
    .email('Invalid email')
    .required('Please enter name'),
    message: Yup.string(),
})

const Contact = () => {
    const [formValues, setFormValues] = useState(false);
    return (
        <ContactSection>
            <ContactContainer>
                <Section>
                    <span>Contact</span> Me
                </Section>
                <ContactWrap>
                    <Formik
                       initialValues={{
                            name: "",
                            email: "",
                            message: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        if(values){
                            setFormValues(true);
                            resetForm({value: ''})
                        }

                      }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            
                            }) => {
                            return (
                                <Form method="post">
                                    <ContactFormGroup>
                                        <ContactFormField 
                                            type="text"
                                            name="name"
                                            valid={touched.name && !errors.name}
                                            error={touched.name && errors.name}
                                            className={touched.name && !errors.name ? "hasText" : ""}

                                        />
                                        <label htmlFor="name">Full name</label>
                                    </ContactFormGroup>
                                    {errors.name && touched.name && (
                                        <ErrorMessage name="name" component={ContactFormError} />
                                    )}
                                    <ContactFormGroup>
                                        <ContactFormField 
                                            type="email"
                                            name="email"
                                            valid={touched.email && !errors.email}
                                            error={touched.email && errors.email}
                                            className={touched.email && values.email ? "hasText" : ""}
                                           
                                        />
                                        <label htmlFor="email">Email</label>
                                    </ContactFormGroup>
                                    {errors.email && touched.email && (
                                        <ErrorMessage name="email" component={ContactFormError} />
                                    )}

                                    <ContactFormGroup>
                                        <ContactFormArea
                                            name="message"
                                            row="3"
                                            placeholder="Message"

                                        />
                                    </ContactFormGroup>
                                    <ContactSubmit
                                        type="submit"
                                    >
                                        Submit
                                    </ContactSubmit>
                                    {formValues &&
                                    <ContactCode>Thanks You send email</ContactCode>
                                    }
                                </Form>
                            )
                            
                        }}
                    </Formik>
                </ContactWrap>
       

            </ContactContainer>
            
        </ContactSection>
    );
};

export default Contact;

    
{/* <Button type="submit" primary={true ? 1 : 0}>Send</Button> */}