import React from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 40px 20px;
  background-color: #ffffff;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ColorBlock = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 480px) {
    min-height: 150px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: normal;
  
  span {
    color: #ff1493;
  }
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ff1493;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
  
  .ant-input,
  .ant-select-selector {
    border-radius: 0;
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
  gap: 16px;

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
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 40px;
  padding: 0 30px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SubmitButton = styled(StyledButton)`
  background-color: black;
  color: white;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

const ResetButton = styled(StyledButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const QuickContact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ColorBlock />
        <FormContainer>
          <Title>QUICK <span>CONTACT</span></Title>
          <StyledForm form={form} onFinish={onFinish} layout="vertical">
            <FormRow>
              <FormColumn>
                <Form.Item name="name">
                  <Input placeholder="Enter Name" />
                </Form.Item>
              </FormColumn>
              <FormColumn>
                <Form.Item name="childName">
                  <Input placeholder="Enter Child Name" />
                </Form.Item>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn>
                <Form.Item name="phone">
                  <Input placeholder="Enter Phone" />
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
                  <Input placeholder="Enter DOB" />
                </Form.Item>
              </FormColumn>
            </FormRow>
            <Form.Item name="message">
              <TextArea rows={4} placeholder="Enter Message" />
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