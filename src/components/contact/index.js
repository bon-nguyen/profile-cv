
 import { Formik,FastField , Form, Field, ErrorMessage, getIn  } from 'formik';
import React from 'react';
import Section from '../section';
import * as Yup from "yup";
import {ContactSection, ContactContainer, ContactWrap, ContactFormGroup,ContactFormGroupItem } from './Contact';
import { Button } from '../button/buttonEl';


const ContactSchema = Yup.object().shape({
    name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    email: Yup.string()
     .email('Invalid email')
     .required('Required'),
    message: Yup.string(),
})

const Contact = () => {
    return (
        <ContactSection>
            <ContactContainer>
                <Section>
                    <span>Contact</span> Me
                </Section>
                <ContactWrap>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                        >
                        <Form>
                            <ContactFormGroup>
                                <ContactFormGroupItem>
                                    <FastField  type="text"  name="name" />
                                    <label htmlFor="name">Company Name</label>
                                </ContactFormGroupItem>
                                <ErrorMessage name="name" />
                            </ContactFormGroup>
                            
                            <Button type="submit" primary={true ? 1 : 0}>Send</Button>
                        </Form>
                      
                    </Formik>
                </ContactWrap>
       

            </ContactContainer>
            
        </ContactSection>
    );
};

export default Contact;