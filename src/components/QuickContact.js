import React from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Button } from 'antd';
import { UserOutlined, PhoneOutlined, CalendarOutlined, MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: #f0f4f8;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColorBlock = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
    transform: rotate(30deg);
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 50px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: 800;
  color: #2c3e50;
  
  span {
    color: #3a7bd5;
  }
  
  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background: linear-gradient(to right, #3a7bd5, #00d2ff);
    margin-top: 15px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 24px;
  }
  
  .ant-input,
  .ant-select-selector {
    border-radius: 10px;
    border: 2px solid #e0e6ed;
    padding: 12px 15px;
    height: auto;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border-color: #3a7bd5;
      box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
    }
  }

  .ant-select-selector {
    padding: 0 15px;
  }

  .ant-input-affix-wrapper {
    padding: 0;
    .ant-input {
      padding: 12px 15px;
    }
  }

  @media (max-width: 1024px) {
    .ant-col {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormColumn = styled.div`
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  height: 50px;
  padding: 0 35px;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SubmitButton = styled(StyledButton)`
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  border: none;
  &:hover {
    background: linear-gradient(135deg, #3373c8, #00bfe6);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(58, 123, 213, 0.3);
  }
`;

const ResetButton = styled(StyledButton)`
  background-color: white;
  color: #3a7bd5;
  border: 2px solid #3a7bd5;
  &:hover {
    background-color: #f0f4f8;
    color: #3a7bd5;
    border-color: #3a7bd5;
  }
`;

// The QuickContact component remains the same


const QuickContact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ColorBlock>We'd Love to Hear from You!</ColorBlock>
        <FormContainer>
          <Title>QUICK <span>CONTACT</span></Title>
          <StyledForm form={form} onFinish={onFinish} layout="vertical">
            <FormRow>
              <FormColumn>
                <Form.Item name="name">
                  <Input prefix={<UserOutlined />} placeholder="Enter Name" />
                </Form.Item>
              </FormColumn>
              <FormColumn>
                <Form.Item name="childName">
                  <Input prefix={<UserOutlined />} placeholder="Enter Child Name" />
                </Form.Item>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn>
                <Form.Item name="phone">
                  <Input prefix={<PhoneOutlined />} placeholder="Enter Phone" />
                </Form.Item>
              </FormColumn>
              <FormColumn>
                <Form.Item name="purpose">
                  <Select placeholder="For Admission">
                    <Select.Option value="admission">For Admission</Select.Option>
                  </Select>
                </Form.Item>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn>
                <Form.Item name="branch">
                  <Select placeholder="Select Branch">
                    {/* Add branch options */}
                  </Select>
                </Form.Item>
              </FormColumn>
              <FormColumn>
                <Form.Item name="dob">
                  <Input prefix={<CalendarOutlined />} placeholder="Enter DOB" />
                </Form.Item>
              </FormColumn>
            </FormRow>
            <Form.Item name="message">
              <TextArea rows={4} prefix={<MessageOutlined />} placeholder="Enter Message" />
            </Form.Item>
            <ButtonGroup>
              <SubmitButton htmlType="submit">SUBMIT</SubmitButton>
              <ResetButton onClick={() => form.resetFields()}>RESET</ResetButton>
            </ButtonGroup>
          </StyledForm>
        </FormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default QuickContact;