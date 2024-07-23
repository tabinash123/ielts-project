import React from 'react';
import styled from 'styled-components';
import { Typography, Radio, Space } from 'antd';

const { Paragraph } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const TrueFalseQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <Paragraph>
        <strong>{question.questionNo}. </strong>
        {question.text}
      </Paragraph>
      <Radio.Group>
        <Space direction="vertical">
          <Radio value="TRUE">TRUE</Radio>
          <Radio value="FALSE">FALSE</Radio>
          <Radio value="NOT GIVEN">NOT GIVEN</Radio>
        </Space>
      </Radio.Group>
    </QuestionContainer>
  );
};

export default TrueFalseQuestion;