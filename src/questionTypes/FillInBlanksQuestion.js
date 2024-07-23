import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Paragraph } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const BlankInput = styled(Input)`
  width: 120px;
  margin: 0 5px;

  ::placeholder {
    font-weight: 600;
    color: #003366;
  }
`;

const FillInTheBlankQuestion = ({ question }) => {
  const renderQuestionText = () => {
    const parts = question.text.split('{BLANK:');
    return parts.map((part, index) => {
      if (index === 0) return part;
      const [blankNum, ...rest] = part.split('}');
      return (
        <React.Fragment key={index}>
          <BlankInput placeholder={`${blankNum}`} />
          {rest.join('}')}
        </React.Fragment>
      );
    });
  };

  return (
    <QuestionContainer>
      <Paragraph>
        <strong>{question.questionNo}. </strong>
        {renderQuestionText()}
      </Paragraph>
    </QuestionContainer>
  );
};

export default FillInTheBlankQuestion;
