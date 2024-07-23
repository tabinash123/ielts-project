import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  padding: 50px;
  max-width: 400px;
  margin: 0 auto;
`;

const RegisterForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 20px;
  }
`;

const Register = () => (
  <RegisterContainer>
    <h1>Register</h1>
    <RegisterForm>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </RegisterForm>
  </RegisterContainer>
);

export default Register;
