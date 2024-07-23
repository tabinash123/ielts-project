import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 50px;
  max-width: 400px;
  margin: 0 auto;
`;

const LoginForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 20px;
  }
`;

const Login = () => (
  <LoginContainer>
    <h1>Login</h1>
    <LoginForm>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Login</Button>
      </Form.Item>
    </LoginForm>
  </LoginContainer>
);

export default Login;
