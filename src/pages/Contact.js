import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, MapPin, Clock, Globe, Book } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f2e6fe;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #424242;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #616161;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const ContactForm = styled.form`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #424242;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #616161;

  svg {
    margin-right: 1rem;
    color: #4FB3FF;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4FB3FF;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #4FB3FF;
  }
`;

const SubmitButton = styled.button`
  background-color: #4FB3FF;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3d8cbf;
  }
`;

const MapSection = styled.div`
  margin-bottom: 4rem;
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoBox = styled.div`
  background: white;
  border-left: 4px solid #4FB3FF;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
    color: #616161;
    font-size: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #4FB3FF;
      position: absolute;
      left: 0;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <PageContainer>
      <PageTitle>Contact Us</PageTitle>
      <Subtitle>We're here to answer your questions about our Montessori program and help you start your child's journey with Sungava Balsansar Montessori School.</Subtitle>

      <ContactSection>
        <ContactInfo>
          <SectionTitle>Get in Touch</SectionTitle>
          <ContactDetail>
            <Phone size={20} />
            +977 1234567890
          </ContactDetail>
          <ContactDetail>
            <Mail size={20} />
            info@sungavabalsansar.edu.np
          </ContactDetail>
          <ContactDetail>
            <MapPin size={20} />
            Tandi, Chitwan, Nepal
          </ContactDetail>
          <ContactDetail>
            <Clock size={20} />
            Sunday - Friday: 10:00 AM - 4:00 PM
          </ContactDetail>
          <ContactDetail>
            <Globe size={20} />
            www.sungavabalsansar.edu.np
          </ContactDetail>
          <ContactDetail>
            <Book size={20} />
            Ages: 2 years to 5.5 years
          </ContactDetail>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <SectionTitle>Inquire About Admission</SectionTitle>
          <InputGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <TextArea
              name="message"
              placeholder="Your Message or Inquiry"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Send Inquiry</SubmitButton>
        </ContactForm>
      </ContactSection>

      <MapSection>
        <SectionTitle>Our Location</SectionTitle>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2707759676386!2d85.32229661503805!3d27.718861082784663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sLazimpat%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1628713562772!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        />
      </MapSection>

      <InfoBox>
        <SectionTitle>Important Information for Parents</SectionTitle>
        <InfoList>
          <li>Admission Process: Schedule a school tour and meet with our staff to learn more about our Montessori program.</li>
          <li>School Hours: Our core program runs from 9:00 AM to 2:00 PM, with before and after school care available.</li>
          <li>Age Groups: We cater to children from 2 years to 5.5 years old, with classrooms designed for specific age ranges.</li>
          <li>Curriculum: Our Montessori curriculum focuses on practical life, sensorial, language, mathematics, and cultural studies.</li>
          <li>Parent Involvement: We encourage parent participation through regular workshops, observation days, and parent-teacher meetings.</li>
        </InfoList>
      </InfoBox>
    </PageContainer>
  );
};

export default Contact;