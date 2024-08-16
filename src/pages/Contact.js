import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, MapPin, Clock, Globe, Book } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%23FF9800" opacity="0.1"/></svg>') repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const PageTitle = styled.h2`
  color: #FF6F00;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  color: #4A4A4A;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;
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
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactForm = styled.form`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #4CAF50;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #4A4A4A;

  svg {
    margin-right: 1rem;
    color: #FF6F00;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF6F00;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF6F00;
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const MapSection = styled.div`
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoBox = styled.div`
  background: white;
  border-left: 4px solid #FF6F00;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
    color: #4A4A4A;
    font-size: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #FF6F00;
      position: absolute;
      left: 0;
    }
  }
`;

// ... Rest of the component remains the same


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