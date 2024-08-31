// ContactForm.jsx
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyB9TDoz4pTaRTHesyodTBWNDLpjiCM4ua8',
  authDomain: 'personal-site-e330b.firebaseapp.com',
  projectId: 'personal-site-e330b',
  storageBucket: 'personal-site-e330b.appspot.com',
  messagingSenderId: '401421884482',
  appId: '1:401421884482:web:3ad81c45de39121efaa1db',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    await addDoc(collection(db, 'contactMe'), {
      formData,
    });

    setIsFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const contactMeForm = () => {
    return (
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col col--3" />
              <div className="col col--3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col col--3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--3" />
              <div className="col col--6">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--12 text--center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const completionMessage = () => {
    return (
      <div className=" padding-top--md contact-submitted padding-horiz--md">
        <p>Thank you for your message! I will get back to you soon.</p>
      </div>
    );
  };

  return (
    <Layout
      title="Esaul Experience"
      description="A history of my work experience"
    >
      <Heading
        as="h1"
        className="container hero__title padding-top--lg text--center"
      >
        Contact Me
      </Heading>

      {isFormSubmitted ? completionMessage() : contactMeForm()}
    </Layout>
  );
};

export default ContactForm;
