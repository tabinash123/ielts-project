import React, { useState, useCallback,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Typography,Button,message } from 'antd';
import { readingData } from './readingData';
import TrueFalseQuestion from './questionTypes/TrueFalseQuestion';
import FillInTheBlankQuestion from './questionTypes/FillInBlanksQuestion';
import FillInParagraphQuestion from './questionTypes/FillInParagraphQuestion';
import { changePart } from '../utils/actions';
import Timer from './Timer';


const { Title, Paragraph } = Typography;

const SubmitButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const TimerWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
`;

const ReadingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  height: 90vh;
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  height: calc(100% - 60px);
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
  width: 2px;
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




const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-top: 1px solid #d9d9d9;
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  background-color: ${props => props.active ? '#f0f0f0' : 'white'};

  &:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

const PartTitle = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? '#1890ff' : '#000000'};
  margin-bottom: 5px;
`;

const QuestionNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const QuestionNumber = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  font-size: 12px;
  background-color: ${props => props.attempted ? '#1890ff' : 'white'};
  color: ${props => props.attempted ? 'white' : 'black'};
`;

const Summary = styled.div`
  font-size: 12px;
  color: #666;
`;

const Footer = () => {
  const currentPart = useSelector(state => state.currentPart);
  const answeredQuestions = useSelector(state => state.answeredQuestions);
  const dispatch = useDispatch();

  const handlePartChange = (partIndex) => {
    dispatch(changePart(partIndex));
  };

  const getTotalQuestions = (part) => 
    part.questions.reduce((acc, questionSet) => acc + questionSet.questions.length, 0);

  const getSolvedQuestions = (partIndex) => 
    Object.keys(answeredQuestions[partIndex] || {}).length;

  return (
    <FooterContainer>
      {readingData.map((part, partIndex) => (
        <PartContainer 
          key={partIndex} 
          onClick={() => handlePartChange(partIndex)}
          active={partIndex === currentPart}
        >
          <PartTitle active={partIndex === currentPart}>
            Part {part.part}
          </PartTitle>
          {partIndex === currentPart ? (
            <QuestionNumbers>
              {part.questions.flatMap(questionSet => 
                questionSet.questions.map(question => (
                  <QuestionNumber 
                    key={question.questionNo} 
                    attempted={answeredQuestions[partIndex]?.[question.questionNo]}
                  >
                    {question.questionNo}
                  </QuestionNumber>
                ))
              )}
            </QuestionNumbers>
          ) : (
            <Summary>
              {getSolvedQuestions(partIndex)} of {getTotalQuestions(part)}
            </Summary>
          )}
        </PartContainer>
      ))}
    </FooterContainer>
  );
};




const ReadingSection = () => {
  const [passageWidth, setPassageWidth] = useState(50);
  const currentPart = useSelector(state => state.currentPart);
  const answeredQuestions = useSelector(state => state.answeredQuestions);
  const dispatch = useDispatch();
  const part = readingData[currentPart];
  const answers = useSelector(state => state.answers);
  const [isTestEnded, setIsTestEnded] = useState(false);
  const submitButtonRef = useRef(null);


  const isAllQuestionsAnswered = useCallback(() => {
    return readingData.every((part, partIndex) => {
      const totalQuestions = part.questions.reduce((acc, questionSet) => acc + questionSet.questions.length, 0);
      const answeredQuestions = Object.keys(answers[partIndex] || {}).length;
      return totalQuestions === answeredQuestions;
    });
  }, [answers]);

   const getStructuredAnswers = useCallback(() => {
    return readingData.reduce((acc, part, partIndex) => {
      acc[partIndex] = part.questions.reduce((partAcc, questionSet) => {
        questionSet.questions.forEach(question => {
          let answer;
          switch (questionSet.type) {
            case 'trueFalse':
              answer = answers[partIndex]?.[question.questionNo] ?? null;
              break;
            case 'fillInTheBlank':
            case 'fillInParagraph':
              answer = answers[partIndex]?.[question.questionNo] ?? null;
              break;
            default:
              answer = null;
          }
          partAcc[question.questionNo] = answer;
        });
        return partAcc;
      }, {});
      return acc;
    }, {});
  }, [answers]);

  const handleSubmit = useCallback(() => {
    if (isAllQuestionsAnswered()) {
      const structuredAnswers = getStructuredAnswers();
      console.log('Submitted answers:', JSON.stringify(structuredAnswers, null, 2));
      message.success('Test submitted successfully!');
      setIsTestEnded(true);
    } else {
      message.warning('Please answer all questions before submitting.');
    }
  }, [getStructuredAnswers, isAllQuestionsAnswered]);

   const handleTimeUp = useCallback(() => {
    const structuredAnswers = getStructuredAnswers();
    console.log('Time\'s up! Submitted answers:', JSON.stringify(structuredAnswers, null, 2));
    message.warning('Time\'s up! Test submitted automatically.');
    setIsTestEnded(true);
  }, [getStructuredAnswers]);
  

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
              <TrueFalseQuestion 
                key={question.questionNo} 
                question={question}
                partIndex={currentPart}
              />
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
              <FillInTheBlankQuestion 
                key={question.questionNo} 
                question={question}
                partIndex={currentPart}
              />
            ))}
          </QuestionSet>
        );
      case 'fillInParagraph':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <FillInParagraphQuestion 
              questionSet={questionSet}
              partIndex={currentPart}
            />
          </QuestionSet>
        );
      default:
        return null;
    }
  };

  return (
    <ReadingSectionContainer>
         <TimerWrapper>
 <Timer totalSeconds={60} onTimeUp={handleTimeUp} />      </TimerWrapper>
      <ContentContainer>
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
      </ContentContainer>
      <Footer />
       <SubmitButtonWrapper>
         <Button 
          type="primary" 
          size="large" 
          onClick={handleSubmit}
          disabled={isTestEnded || !isAllQuestionsAnswered()}
        >
          Submit
        </Button>
      </SubmitButtonWrapper>
    </ReadingSectionContainer>
  );
};

export default ReadingSection;
