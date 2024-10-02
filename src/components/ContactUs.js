import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const ContactUsContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875em;
`;

const Footer = styled.footer`
  padding: 2rem;
  background-color: #206058;
  color: white;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;

  & h3 {
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    margin-bottom: 0.5rem;
  }

  & a {
    color: white;
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  & img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }
`;

const ContactUs = ({ theme })  => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const globalTheme = useSelector((state) => state.theme.theme);

  const initialValues = {
    name: '',
    email: '',
    address: '',
    dateOfBirth: '',
    bio: '',
    profileImage: null,
    bannerImage: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    bio: Yup.string().required('Bio is required'),
    profileImage: Yup.mixed().required('Profile image is required'),
    bannerImage: Yup.mixed().required('Banner image is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setShowModal(true);
    setSubmitting(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <ContactUsContainer theme={theme}>
        <h1>Contact Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" theme={theme} />
                <ErrorMessage name="name" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" theme={theme} />
                <ErrorMessage name="email" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="address">Address</Label>
                <Input type="text" id="address" name="address" theme={theme} />
                <ErrorMessage name="address" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input type="date" id="dateOfBirth" name="dateOfBirth" theme={theme} />
                <ErrorMessage name="dateOfBirth" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  theme={theme}
                  onChange={(event) => setFieldValue('bio', event.target.value)}
                />
                <ErrorMessage name="bio" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="profileImage">Profile Image</Label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={(event) => {
                    setFieldValue('profileImage', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="profileImage" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="bannerImage">Banner Image</Label>
                <input
                  type="file"
                  id="bannerImage"
                  name="bannerImage"
                  onChange={(event) => {
                    setFieldValue('bannerImage', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="bannerImage" component={ErrorText} />
              </FormGroup>

              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          )}
        </Formik>

        <Modal show={showModal} onClose={closeModal} theme={globalTheme}>
          <h2>Form Data</h2>
          {formData && (
            <div className={`modal-content modal-content-${globalTheme}`}>

              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
              <p><strong>Bio:</strong> {formData.bio}</p>
              <p><strong>Profile Image:</strong> {formData.profileImage.name}</p>
              <p><strong>Banner Image:</strong> {formData.bannerImage.name}</p>
            </div>
          )}
        </Modal>
      </ContactUsContainer>

      <Footer>
        <FooterLinks>
          <div>
            <h3>About</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#hosting">Hosting</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3>Showcase</h3>
            <ul>
              <li><a href="#showcase">Showcase</a></li>
              <li><a href="#themes">Themes</a></li>
              <li><a href="#plugins">Plugins</a></li>
              <li><a href="#patterns">Patterns</a></li>
            </ul>
          </div>
          <div>
            <h3>Learn</h3>
            <ul>
              <li><a href="#learn">Learn</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#devs">Developers</a></li>
              <li><a href="#tv">WordPress.tv</a></li>
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li><a href="#events">Events</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#swag">Swag Store</a></li>
            </ul>
          </div>
        </FooterLinks>
        <FooterBottom>
          <p>&copy; 2024 Astra. All rights reserved.</p>
          <SocialIcons>
            <a href="https://www.instagram.com"><img src="/images/instagram.jpeg" alt="Instagram" /></a>
            <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/images/twitter.png" alt="Twitter" /></a>
          </SocialIcons>
        </FooterBottom>
      </Footer>
    </ThemeProvider>
  );
};

export default ContactUs;
