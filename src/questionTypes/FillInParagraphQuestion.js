import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Title, Paragraph } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const BlankInput = styled(Input)`
  width: 120px;
  margin: 0 5px;
`;

const FillInParagraphQuestion = ({ questionSet }) => {
  const renderParagraph = () => {
    const parts = questionSet.paragraph.split('{BLANK:');
    return parts.map((part, index) => {
      if (index === 0) return part;
      const [blankNum, ...rest] = part.split('}');
      return (
        <React.Fragment key={index}>
          <BlankInput placeholder={blankNum} />
          {rest.join('}')}
        </React.Fragment>
      );
    });
  };

  return (
    <QuestionContainer>
      <Paragraph strong>{questionSet.title}</Paragraph>
      <Paragraph>{renderParagraph()}</Paragraph>
    </QuestionContainer>
  );
};

export default FillInParagraphQuestion;