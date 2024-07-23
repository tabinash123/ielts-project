import React from 'react';
import styled from 'styled-components';
import { Input, Form } from 'antd';

const SectionWrapper = styled.div`
  display: flex;
  background-color: #f5f5f5;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
  background-color: white;
`;

const ColorSection = styled.div`
  flex: 1;
  background-color: #e6f7ff; /* Light blue background, you can change this color */
`;

const Title = styled.h2`
  color: #003366;
  font-size: 28px;
  margin-bottom: 24px;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const StyledInput = styled(Input)`
  border-radius: 0;
`;

const StyledTextArea = styled(Input.TextArea)`
  border-radius: 0;
`;

const SubmitButton = styled.button`
  background-color: #e91e63;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius:10px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #003366;
    border-color: #003366;
  }
`;

const ContactSection = () => {
  return (
    <SectionWrapper>
      <FormSection>
        <Title>Send Us a Message</Title>
        <StyledForm layout="vertical">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <StyledInput placeholder="Your name here" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!', type: 'email' },
            ]}
          >
            <StyledInput placeholder="Your email here" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: 'Please input the subject!' }]}
          >
            <StyledInput placeholder="Your subject here" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <StyledTextArea rows={4} placeholder="Tell us a few words" />
          </Form.Item>
          <Form.Item>
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </Form.Item>
        </StyledForm>
      </FormSection>
      <ColorSection />
    </SectionWrapper>
  );
};

export default ContactSection;
