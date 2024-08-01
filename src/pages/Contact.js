import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Select, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { FaViber } from 'react-icons/fa';
 import imag from '../assets/gallary/10.png'
const { Option } = Select;
const { TextArea } = Input;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyImageContainer = styled.div`
  flex: 1;
  min-width: 200px;
  height: 200px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const CompanyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #f0f2f5;
  padding: 1rem;
  border-radius: 8px;
`;

const ContactForm = styled(Form)`
  width: 50%; /* Reduced width of the form */
  margin: 0 auto; /* Center the form */
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

const SectionHeader = styled.h2`
  margin-bottom: 1.5rem;
  color: #1890ff;
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const InfoIcon = styled.span`
  margin-right: 0.5rem;
  color: #1890ff;
  font-size: 1.2rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Thank you for your message! We will get back to you soon.');
    form.resetFields();
  };

  return (
    <ContactWrapper>
      <TopSection>
        <CompanyImageContainer>
          <CompanyImage src={imag} alt="Company" />
        </CompanyImageContainer>

        <ContactInfo>
          <SectionHeader>Contact Information</SectionHeader>
          <InfoItem>
            <InfoIcon><MailOutlined /></InfoIcon>
            contact@example.com
          </InfoItem>
          <InfoItem>
            <InfoIcon><PhoneOutlined /></InfoIcon>
            +1 (123) 456-7890
          </InfoItem>
          <InfoItem>
            <InfoIcon><WhatsAppOutlined /></InfoIcon>
            +1 (123) 456-7890
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaViber /></InfoIcon>
            +1 (123) 456-7890
          </InfoItem>
          <InfoItem>
            <InfoIcon><EnvironmentOutlined /></InfoIcon>
            123 Business Street, City, State 12345
          </InfoItem>
        </ContactInfo>
      </TopSection>

      <ContactForm form={form} onFinish={onFinish} layout="vertical">
        <SectionHeader>Send Us a Message</SectionHeader>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Your Phone Number" />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[{ required: true, message: 'Please select a subject' }]}
        >
          <Select placeholder="Select a subject">
            <Option value="general">General Inquiry</Option>
            <Option value="support">Technical Support</Option>
            <Option value="sales">Sales</Option>
            <Option value="feedback">Feedback</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Send Message
          </StyledButton>
        </Form.Item>
      </ContactForm>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095157!2d144.95373531564614!3d-37.81627974202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57744f0e7b43e33!2s123%20Business%20Street%2C%20City%2C%20State%2012345!5e0!3m2!1sen!2sau!4v1614652681464!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>
      </MapContainer>
    </ContactWrapper>
  );
};

export default ContactUs;
