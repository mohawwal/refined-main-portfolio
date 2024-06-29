import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

import axios from 'axios'

import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"


const Contact = () => {
  
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email().required("Email is required"),
    subject: Yup.string().min(3).max(30).required("Subject is required"),
    message: Yup.string().min(3).required("Message is required")
  });

  const sendMail = (values) => {
    axios.get("https://refined-portfolio-api.onrender.com", { params: values })
     .then(() => {
        console.log('success');
        alert("Message delivered")
      })
     .catch(() => {
        console.log('failure');
      });
  };
  
  return (
    <motion.div
      intial={{ opacity: 1 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
    >
      <div className="head-text">
        <h1>
          GET IN <span>TOUCH</span>
        </h1>
      </div>
      <div className="contact">
        <div className="contact-message">
          <h2>LET'S DISCUSS!</h2>
          <p className="cont-msg">
            Get in touch with me to discuss new projects or creative ideas. I'm
            open to exploring opportunities and collaborating on your visions.
          </p>
          <div className="social-contact">
            <div className="social-media">
              <div>
                <FontAwesomeIcon className="media-icon" icon={faEnvelope} />
              </div>
              <div className="media">
                <a href="mailto:email@example.com"  target="_blank" rel="noreferrer">
                  <p className="command-text">MAIL ME</p>
                  <p>aanileleye@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="social-media">
              <div>
                <FontAwesomeIcon className="media-icon" icon={faPhone} />
              </div>
              <div className="media">
                <p className="command-text">CALL ME</p> <p>+234 815 912 4775</p>
              </div>
            </div>
            <div className="social-media-icons">
              <FontAwesomeIcon className="icon" icon={faXTwitter} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
          </div>
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            sendMail(values);
            setSubmitting(false);
        }}>
          <Form className="contact-details">
            <div className="details-input">
              <div className="input-text">
                <p>Your Name</p>
                <div className="input-textField">
                  <Field 
                    type="text" 
                    placeholder="How do i address?" 
                    name='name'
                  />
                  <ErrorMessage name='name' component='div' className="errorMsg"/>
                </div>
              </div>
              <div className="input-text">
                <p>Your Email</p>{" "}
                <div className="input-textField">
                  <Field
                    type="email"
                    placeholder="How can i get in touch with you?"
                    name='email'
                  />
                  <ErrorMessage name='email' component='div' className="errorMsg"/>
                </div>
              </div>
              <div className="input-text">
                <p>Subject</p>
                <div className="input-textField">
                  <Field 
                    className='fieldInput'
                    type="text" 
                    placeholder="What are we discussing about?" 
                    name='subject'
                  />
                  <ErrorMessage name='subject' component='div' className="errorMsg"/>
                </div>
              </div>
            </div>
            <div className="message-text">
              <p>Your Message</p>{" "}
              <Field
                as='textarea'
                className='textarea'
                placeholder="Kindly provide more information about what you'd like me to help you with. Thanks."
                name='message'
              />
               <ErrorMessage name='message' component='div' className="errorMsg"/>
            </div>
            <button 
              type="submit"
              className="message-btn">GET IN TOUCH</button>
          </Form>
        </Formik>
      </div>
    </motion.div>
  );
};

export default Contact;
