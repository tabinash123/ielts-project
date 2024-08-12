import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const FAQSection = styled.section`
  max-width: 800px;
  // margin: 60px auto;
  padding: 20px 20px;
    font-family: Arial, sans-serif;
    
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #ff1493;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ff1493;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  ${FAQQuestion}:hover & {
    transform: rotate(90deg);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FAQAnswer = styled.div`
  padding: 0 20px;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? slideDown : 'none')} 0.3s ease-out;

  p {
    margin: 20px 0;
    color: #666;
    line-height: 1.6;
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What age groups do you cater to?",
      answer: "We offer programs for children aged 2 to 5 years old, including toddler, preschool, and kindergarten classes."
    },
    {
      question: "What is your teacher-to-student ratio?",
      answer: "Our teacher-to-student ratio varies by age group but typically ranges from 1:4 for toddlers to 1:10 for kindergarten, ensuring personalized attention for each child."
    },
    {
      question: "Do you provide meals and snacks?",
      answer: "Yes, we provide nutritious snacks twice a day. For full-day programs, we also offer a balanced lunch. All our meals are prepared fresh daily and cater to various dietary requirements."
    },
    {
      question: "What is your approach to discipline?",
      answer: "We use positive reinforcement and redirection techniques to guide children's behavior. Our goal is to help children develop self-regulation skills and emotional intelligence."
    },
    {
      question: "How do you communicate with parents?",
      answer: "We use a combination of daily reports, weekly newsletters, parent-teacher conferences, and a secure mobile app to keep parents informed about their child's progress and daily activities."
    }
  ];

  return (
    <FAQSection>
      <Title>Frequently Asked Questions</Title>
      {faqData.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {faq.question}
            <IconWrapper>
              {openIndex === index ? <MinusOutlined /> : <PlusOutlined />}
            </IconWrapper>
          </FAQQuestion>
          <FAQAnswer isOpen={openIndex === index}>
            <p>{faq.answer}</p>
          </FAQAnswer>
        </FAQItem>
      ))}
    </FAQSection>
  );
};

export default FAQ;