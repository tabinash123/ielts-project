import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Star } from 'lucide-react';

import parent1 from '../assets/parents/parent1.jpg';
import parent2 from '../assets/parents/parent2.jpg';
import parent3 from '../assets/parents/parent3.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const TestimonialSection = styled.section`
  padding: 60px 20px;
  text-align: center;
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
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
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
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) rotate(1deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  animation: ${slideIn} 1s ease-out ${props => 0.3 + props.index * 0.2}s both;
`;

const QuoteSymbol = styled.div`
  font-size: 4rem;
  color: #FFA000;
  line-height: 1;
  margin-bottom: 20px;
  font-family: Georgia, serif;
`;

const TestimonialContent = styled.p`
  color: #4A4A4A;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid #FFA000;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialAuthor = styled.div`
  text-align: left;
`;

const TestimonialName = styled.h3`
  color: #FF6F00;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
`;

const TestimonialTitle = styled.p`
  color: #4CAF50;
  font-size: 1rem;
  margin: 5px 0 0;
`;

const StarRating = styled.div`
  color: #FFD700;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const SimpleTestimonials = () => {
  const testimonials = [
    { 
      name: 'Aarav Sharma', 
      title: 'Parent of 5-year-old', 
      image: parent1,
      content: 'Sungava Balsansar has been a blessing for our family. The Montessori approach has helped our daughter become more independent and confident in her abilities.',
      rating: 5
    },
    { 
      name: 'Priya Thapa', 
      title: 'Mother of twins', 
      image: parent2,
      content: 'We\'ve seen remarkable progress in our twins since they started at Sungava Balsansar. The teachers are attentive and the environment truly nurtures their individual growth.',
      rating: 5
    },
    { 
      name: 'Rajesh Adhikari', 
      title: 'Father of 3-year-old', 
      image: parent3,
      content: 'The holistic development approach at Sungava Balsansar is impressive. Our son has not only improved academically but also socially and emotionally.',
      rating: 5
    },
  ];

  return (
    <TestimonialSection>
      <Title>What Parents Say</Title>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index}>
            <QuoteSymbol>"</QuoteSymbol>
            <StarRating>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={24} fill="#FFD700" />
              ))}
            </StarRating>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialFooter>
              <TestimonialImageWrapper>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              </TestimonialImageWrapper>
              <TestimonialAuthor>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialTitle>{testimonial.title}</TestimonialTitle>
              </TestimonialAuthor>
            </TestimonialFooter>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default SimpleTestimonials;