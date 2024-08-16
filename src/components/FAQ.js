import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { PlusCircle, MinusCircle } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const FAQSection = styled.section`
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%23FF9800" opacity="0.1"/></svg>') repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const Title = styled.h2`
  color: #FF6F00;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #FFFFFF;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  animation: ${slideIn} 1s ease-out ${props => 0.3 + props.index * 0.1}s both;
`;

const FAQQuestion = styled.div`
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #4A4A4A;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: #FFF3E0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF6F00;
  font-size: 24px;
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
    color: #4A4A4A;
    line-height: 1.6;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
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
      answer: "We offer programs for little explorers aged 2 to 5 years old, including toddler, preschool, and kindergarten classes. Each group has activities tailored to their developmental stage and interests."
    },
    {
      question: "What is your teacher-to-student ratio?",
      answer: "We keep our groups small and cozy! Our teacher-to-student ratio varies by age group, typically ranging from 1:4 for our youngest learners to 1:10 for our kindergarten adventurers. This ensures each child gets the attention and guidance they need."
    },
    {
      question: "Do you provide meals and snacks?",
      answer: "Absolutely! We offer yummy and nutritious snacks twice a day. For our full-day programs, we also serve a balanced lunch. All our meals are prepared fresh daily, using wholesome ingredients, and we cater to various dietary needs. Mealtime is not just about eating – it's a fun, social learning experience!"
    },
    {
      question: "What is your approach to discipline?",
      answer: "We believe in gentle guidance and positive reinforcement. Our goal is to help children understand their emotions and develop self-regulation skills. We use redirection techniques and encourage problem-solving. We create a respectful environment where children learn to express themselves appropriately and consider others' feelings."
    },
    {
      question: "How do you communicate with parents?",
      answer: "We love keeping our parents in the loop! We use a mix of daily reports, weekly newsletters, and parent-teacher conferences. We also have a secure app where we share photos and updates about your child's day. We believe in building a strong partnership with parents to support each child's growth and learning journey."
    }
  ];

  return (
    <FAQSection>
      <Title>Curious Minds Ask</Title>
      <FAQContainer>
        {faqData.map((faq, index) => (
          <FAQItem key={index} index={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <IconWrapper>
                {openIndex === index ? <MinusCircle size={28} /> : <PlusCircle size={28} />}
              </IconWrapper>
            </FAQQuestion>
            <FAQAnswer isOpen={openIndex === index}>
              <p>{faq.answer}</p>
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;