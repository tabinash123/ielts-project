
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { readingData } from './readingData';
import TrueFalseQuestion from './questionTypes/TrueFalseQuestion';
import FillInTheBlankQuestion from './questionTypes/FillInBlanksQuestion';
import FillInParagraphQuestion from './questionTypes/FillInParagraphQuestion';

const { Title, Paragraph } = Typography;

const ReadingSectionContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  position: relative;
  height: 80vh;
`;

const PassageContainer = styled.div`
  width: ${props => props.width}%;
  padding-right: 20px;
  overflow-y: auto;
  height: 100%;
`;

const QuestionsContainer = styled.div`
  width: ${props => 100 - props.passageWidth}%;
  padding-left: 20px;
  overflow-y: auto;
  height: 100%;
`;

const Divider = styled.div`
  width: 10px;
  background-color: #ccc;
  cursor: col-resize;
  height: 100%;
  position: absolute;
  left: ${props => props.left}%;
  top: 0;
`;

const QuestionSet = styled.div`
  margin-bottom: 30px;
`;

const ReadingSection = () => {
  const [passageWidth, setPassageWidth] = useState(50);
  const [currentPart, setCurrentPart] = useState(0);
  const part = readingData[currentPart];

  const handleMouseDown = useCallback(() => {
    const handleMouseMove = (e) => {
      const newWidth = (e.clientX / window.innerWidth) * 100;
      setPassageWidth(Math.max(20, Math.min(80, newWidth)));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const renderQuestionSet = (questionSet, index) => {
    switch (questionSet.type) {
      case 'trueFalse':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <Paragraph strong>{questionSet.title}</Paragraph>
            {questionSet.questions.map(question => (
              <TrueFalseQuestion key={question.questionNo} question={question} />
            ))}
          </QuestionSet>
        );
      case 'fillInTheBlank':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <Paragraph strong>{questionSet.title}</Paragraph>
            {questionSet.questions.map(question => (
              <FillInTheBlankQuestion key={question.questionNo} question={question} />
            ))}
          </QuestionSet>
        );
      case 'fillInParagraph':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <FillInParagraphQuestion questionSet={questionSet} />
          </QuestionSet>
        );
      default:
        return null;
    }
  };

  return (
    <ReadingSectionContainer>
      <PassageContainer width={passageWidth}>
        <Title level={3}>Part {part.part}</Title>
        {part.passage.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </PassageContainer>
      <Divider onMouseDown={handleMouseDown} left={passageWidth} />
      <QuestionsContainer passageWidth={passageWidth}>
        {part.questions.map(renderQuestionSet)}
      </QuestionsContainer>
    </ReadingSectionContainer>
  );
};

export default ReadingSection;
